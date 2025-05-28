
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '../hooks/useAuth';

export const LandingPage: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="w-full max-w-7xl mx-auto bg-white font-sans">
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900">
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Empower Your Marketing with Data-Driven Campaigns!</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">Segment smarter, deliver personalized campaigns, and gain actionable insights—all in one platform.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button 
              onClick={login}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get Started for Free</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <Button 
              onClick={login}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 border border-blue-500 hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
              </svg>
              <span>Login with Google</span>
            </Button>
          </div>
        </div>
        
        <div className="absolute right-0 top-0 h-full w-1/2 hidden md:block overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Dashboard visualization" 
            className="h-full w-full object-cover opacity-25 hover:opacity-40 transition-opacity duration-500"
          />
        </div>
        
        <div className="absolute bottom-0 w-full left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
            <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,144C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </header>
      
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">Powerful Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our platform offers everything you need to create, manage, and optimize your marketing campaigns.</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full inline-flex items-center justify-center w-14 h-14 mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Audience Segmentation</h3>
              <p className="text-gray-600 mb-4">Flexible rule builder with AND/OR logic for precise targeting.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-indigo-500">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full inline-flex items-center justify-center w-14 h-14 mb-6">
                <span className="text-3xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Campaign Management</h3>
              <p className="text-gray-600 mb-4">Create, deliver, and track personalized campaigns with ease.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-green-500">
              <div className="bg-green-100 text-green-600 p-3 rounded-full inline-flex items-center justify-center w-14 h-14 mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600 mb-4">Automate rules, message generation, and performance analysis.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-amber-500">
              <div className="bg-amber-100 text-amber-600 p-3 rounded-full inline-flex items-center justify-center w-14 h-14 mb-6">
                <span className="text-3xl">🔐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure Data Handling</h3>
              <p className="text-gray-600 mb-4">Google OAuth integration and robust API support for your data.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute -right-16 top-16 w-32 h-32 bg-indigo-100 rounded-full opacity-60"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-3">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get started in just four simple steps</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 -translate-y-1/2 rounded-full hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-md relative">
                  <span className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20"></span>
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Connect Your Data</h3>
                <p className="text-gray-600 text-center">Easily ingest customer and order data via APIs.</p>
                <div className="mt-6 flex justify-center">
                  <span className="text-blue-600 text-3xl">💾</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-md">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Segment Your Audience</h3>
                <p className="text-gray-600 text-center">Define rules with an intuitive builder.</p>
                <div className="mt-6 flex justify-center">
                  <span className="text-blue-600 text-3xl">👥</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-md">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Launch Campaigns</h3>
                <p className="text-gray-600 text-center">Send personalized messages to targeted audiences.</p>
                <div className="mt-6 flex justify-center">
                  <span className="text-blue-600 text-3xl">🚀</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
                <div className="bg-blue-600 text-white h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-md">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Analyze & Optimize</h3>
                <p className="text-gray-600 text-center">Gain actionable insights with detailed stats.</p>
                <div className="mt-6 flex justify-center">
                  <span className="text-blue-600 text-3xl">📊</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-300 rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Marketing?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get started today and see the difference our platform can make for your business.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              onClick={login}
              className="bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get Started for Free</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
            <Button 
              onClick={login}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 border border-blue-500 hover:shadow-lg"
            >
              <span>📅 Schedule Demo</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
