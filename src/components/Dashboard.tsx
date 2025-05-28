
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Customers', value: '2,543', change: '+12%', color: 'from-blue-500 to-blue-600' },
    { title: 'Active Campaigns', value: '8', change: '+2', color: 'from-emerald-500 to-emerald-600' },
    { title: 'Conversion Rate', value: '24.3%', change: '+5.2%', color: 'from-purple-500 to-purple-600' },
    { title: 'Revenue', value: '₹1,24,560', change: '+18%', color: 'from-orange-500 to-orange-600' },
  ];

  const recentCampaigns = [
    { name: 'Summer Sale 2024', status: 'Active', sent: 1250, opened: 890, clicked: 234 },
    { name: 'Welcome Series', status: 'Completed', sent: 456, opened: 312, clicked: 89 },
    { name: 'Product Launch', status: 'Draft', sent: 0, opened: 0, clicked: 0 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <Link to="/campaigns/create">
          <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
            Create Campaign
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-emerald-600 font-medium">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} opacity-80`}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Campaigns */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCampaigns.map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    campaign.status === 'Active' ? 'bg-emerald-500' : 
                    campaign.status === 'Completed' ? 'bg-blue-500' : 'bg-gray-400'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                    <p className="text-sm text-gray-600">{campaign.status}</p>
                  </div>
                </div>
                <div className="flex space-x-6 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{campaign.sent}</p>
                    <p className="text-gray-600">Sent</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{campaign.opened}</p>
                    <p className="text-gray-600">Opened</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{campaign.clicked}</p>
                    <p className="text-gray-600">Clicked</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
