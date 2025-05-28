
const GEMINI_API_KEY = 'AIzaSyCQldV8UAMLOZ1x9LmWUU4tqKfuB8ROp6U';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export interface GeminiRequest {
  prompt: string;
  context?: string;
}

export interface GeminiResponse {
  text: string;
  success: boolean;
  error?: string;
}

export const generateCampaignMessage = async (
  audienceType: string,
  campaignType: string,
  productContext?: string
): Promise<GeminiResponse> => {
  try {
    const prompt = `Generate a compelling marketing campaign message for ${audienceType} audience. 
    Campaign type: ${campaignType}
    ${productContext ? `Product/Service context: ${productContext}` : ''}
    
    Requirements:
    - Keep it under 150 words
    - Include a clear call-to-action
    - Make it engaging and personalized
    - Include relevant emojis
    - Focus on value proposition
    
    Generate 3 different variations and return the best one.`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('No content generated');
    }

    return {
      text: generatedText.trim(),
      success: true
    };

  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      text: '',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const convertNaturalLanguageToRules = async (
  naturalLanguage: string
): Promise<GeminiResponse> => {
  try {
    const prompt = `Convert this natural language query into structured segmentation rules:
    "${naturalLanguage}"
    
    Convert to JSON format with this structure:
    {
      "rules": [
        {
          "field": "spend|visits|lastPurchase|age|location",
          "operator": ">|<|=|!=|contains",
          "value": "actual_value",
          "logic": "AND|OR"
        }
      ]
    }
    
    Available fields: spend, visits, lastPurchase, age, location
    Available operators: >, <, =, !=, contains
    
    Return only the JSON structure, no additional text.`;

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.3,
          topK: 20,
          topP: 0.8,
          maxOutputTokens: 512,
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error('No rules generated');
    }

    return {
      text: generatedText.trim(),
      success: true
    };

  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      text: '',
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};
