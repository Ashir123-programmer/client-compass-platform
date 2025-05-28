
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const CampaignBreakdown: React.FC = () => {
  const campaignTypes = [
    {
      type: 'Promotional',
      count: 24,
      avgROI: '320%',
      totalRevenue: '₹2,45,600',
      successRate: 85,
      color: 'bg-emerald-500'
    },
    {
      type: 'Welcome Series',
      count: 12,
      avgROI: '280%',
      totalRevenue: '₹1,23,400',
      successRate: 92,
      color: 'bg-blue-500'
    },
    {
      type: 'Re-engagement',
      count: 8,
      avgROI: '150%',
      totalRevenue: '₹68,900',
      successRate: 67,
      color: 'bg-purple-500'
    },
    {
      type: 'Product Launch',
      count: 6,
      avgROI: '450%',
      totalRevenue: '₹1,89,200',
      successRate: 78,
      color: 'bg-orange-500'
    }
  ];

  const recentCampaigns = [
    {
      name: 'Black Friday Mega Sale',
      type: 'Promotional',
      status: 'active',
      sent: 15420,
      opened: 10847,
      clicked: 4218,
      converted: 1205,
      revenue: '₹3,45,600',
      startDate: '2024-01-15',
      performance: 94
    },
    {
      name: 'New Product Announcement',
      type: 'Product Launch',
      status: 'completed',
      sent: 8750,
      opened: 6825,
      clicked: 2890,
      converted: 892,
      revenue: '₹2,18,900',
      startDate: '2024-01-10',
      performance: 87
    },
    {
      name: 'Customer Loyalty Program',
      type: 'Re-engagement',
      status: 'active',
      sent: 5670,
      opened: 3245,
      clicked: 1456,
      converted: 378,
      revenue: '₹89,400',
      startDate: '2024-01-12',
      performance: 72
    }
  ];

  const calculateRate = (num: number, total: number) => {
    return ((num / total) * 100).toFixed(1);
  };

  return (
    <div className="space-y-6">
      {/* Campaign Types Overview */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Campaign Types Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {campaignTypes.map((type, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                  <span className="text-sm text-gray-600">{type.count} campaigns</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{type.type}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg ROI:</span>
                    <span className="font-semibold text-emerald-600">{type.avgROI}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Revenue:</span>
                    <span className="font-semibold text-gray-900">{type.totalRevenue}</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Success Rate</span>
                      <span>{type.successRate}%</span>
                    </div>
                    <Progress value={type.successRate} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Campaign Details */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Recent Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recentCampaigns.map((campaign, index) => (
              <div key={index} className="p-6 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <div className="flex items-center space-x-3 mt-1">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {campaign.type}
                      </Badge>
                      <Badge 
                        variant={campaign.status === 'active' ? 'default' : 'secondary'}
                        className={campaign.status === 'active' 
                          ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                        }
                      >
                        {campaign.status}
                      </Badge>
                      <span className="text-sm text-gray-600">Started: {new Date(campaign.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{campaign.revenue}</p>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                  </div>
                </div>

                {/* Campaign Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="text-lg font-bold text-gray-900">{campaign.sent.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Sent</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <p className="text-lg font-bold text-blue-600">{campaign.opened.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Opened ({calculateRate(campaign.opened, campaign.sent)}%)</p>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <p className="text-lg font-bold text-purple-600">{campaign.clicked.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Clicked ({calculateRate(campaign.clicked, campaign.sent)}%)</p>
                  </div>
                  <div className="text-center p-3 bg-emerald-50 rounded-lg">
                    <p className="text-lg font-bold text-emerald-600">{campaign.converted.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Converted ({calculateRate(campaign.converted, campaign.sent)}%)</p>
                  </div>
                </div>

                {/* Performance Score */}
                <div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span>Overall Performance Score</span>
                    <span className="font-semibold text-gray-900">{campaign.performance}/100</span>
                  </div>
                  <Progress 
                    value={campaign.performance} 
                    className="h-3"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
