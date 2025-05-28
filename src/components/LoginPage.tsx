
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '../hooks/useAuth';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-white/80 backdrop-blur-md border-0 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center">
              <span className="text-2xl text-white font-bold">MC</span>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Welcome to MiniCRM</CardTitle>
          <p className="text-gray-600">Empower your customer relationships with AI-driven insights</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <span className="text-blue-600">🎯</span>
              <span className="text-sm text-gray-700">Smart audience segmentation</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-lg">
              <span className="text-emerald-600">🤖</span>
              <span className="text-sm text-gray-700">AI-powered campaign creation</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <span className="text-purple-600">📊</span>
              <span className="text-sm text-gray-700">Real-time analytics & insights</span>
            </div>
          </div>
          
          <Button 
            onClick={login}
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-6 text-lg"
          >
            <span className="mr-2">🔐</span>
            Continue with Google
          </Button>
          
          <p className="text-xs text-center text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
