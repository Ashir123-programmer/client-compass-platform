
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

export const CampaignCreator: React.FC = () => {
  const [campaignData, setCampaignData] = useState({
    name: '',
    subject: '',
    message: '',
    segment: '',
    schedule: 'now'
  });
  const [isGeneratingMessage, setIsGeneratingMessage] = useState(false);

  const segments = [
    { id: '1', name: 'High Value Customers', size: 1247 },
    { id: '2', name: 'New Customers', size: 543 },
    { id: '3', name: 'Inactive Users', size: 892 },
  ];

  const generateAIMessage = async () => {
    setIsGeneratingMessage(true);
    
    // Simulate AI API call with Gemini
    setTimeout(() => {
      const suggestions = [
        "🎉 Exclusive offer just for you! Get 25% off your next purchase with code SPECIAL25. Limited time only!",
        "We miss you! Come back and enjoy 20% off your favorite items. Your cart is waiting! 🛍️",
        "New arrivals are here! Be the first to explore our latest collection with early access privileges. ✨"
      ];
      
      const randomMessage = suggestions[Math.floor(Math.random() * suggestions.length)];
      setCampaignData(prev => ({ ...prev, message: randomMessage }));
      setIsGeneratingMessage(false);
      
      toast({
        title: "AI Message Generated",
        description: "Your personalized message has been created using AI!",
      });
    }, 2000);
  };

  const handleSubmit = () => {
    toast({
      title: "Campaign Created Successfully!",
      description: `Campaign "${campaignData.name}" has been scheduled for delivery.`,
    });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Create Campaign</h1>
      
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Campaign Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
              <Input
                value={campaignData.name}
                onChange={(e) => setCampaignData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter campaign name"
                className="bg-white/70"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Segment</label>
              <Select value={campaignData.segment} onValueChange={(value) => setCampaignData(prev => ({ ...prev, segment: value }))}>
                <SelectTrigger className="bg-white/70">
                  <SelectValue placeholder="Select audience segment" />
                </SelectTrigger>
                <SelectContent>
                  {segments.map(segment => (
                    <SelectItem key={segment.id} value={segment.id}>
                      {segment.name} ({segment.size.toLocaleString()} customers)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Subject</label>
            <Input
              value={campaignData.subject}
              onChange={(e) => setCampaignData(prev => ({ ...prev, subject: e.target.value }))}
              placeholder="Enter email subject line"
              className="bg-white/70"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">Message Content</label>
              <Button
                variant="outline"
                size="sm"
                onClick={generateAIMessage}
                disabled={isGeneratingMessage}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600"
              >
                {isGeneratingMessage ? "Generating..." : "✨ AI Generate"}
              </Button>
            </div>
            <Textarea
              value={campaignData.message}
              onChange={(e) => setCampaignData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Enter your campaign message..."
              className="bg-white/70 min-h-32"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
            <Select value={campaignData.schedule} onValueChange={(value) => setCampaignData(prev => ({ ...prev, schedule: value }))}>
              <SelectTrigger className="bg-white/70">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="now">Send Now</SelectItem>
                <SelectItem value="schedule">Schedule for Later</SelectItem>
                <SelectItem value="draft">Save as Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {campaignData.segment && (
            <div className="p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Campaign Preview</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Target Audience:</span>
                  <p className="font-medium">{segments.find(s => s.id === campaignData.segment)?.name}</p>
                </div>
                <div>
                  <span className="text-gray-600">Estimated Reach:</span>
                  <p className="font-medium">{segments.find(s => s.id === campaignData.segment)?.size.toLocaleString()} customers</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex space-x-3">
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white flex-1"
            >
              Launch Campaign
            </Button>
            <Button variant="outline" className="flex-1">
              Save Draft
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
