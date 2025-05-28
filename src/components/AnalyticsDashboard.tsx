
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PerformanceChart } from './PerformanceChart';
import { CustomerInsights } from './CustomerInsights';
import { CampaignBreakdown } from './CampaignBreakdown';

export const AnalyticsDashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const overviewStats = [
    {
      title: 'Total Campaign Revenue',
      value: '₹4,24,680',
      change: '+23.5%',
      trend: 'up',
      icon: '💰',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Active Customers',
      value: '12,847',
      change: '+12.3%',
      trend: 'up',
      icon: '👥',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Avg. Campaign ROI',
      value: '340%',
      change: '+45.2%',
      trend: 'up',
      icon: '📈',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Customer Lifetime Value',
      value: '₹8,924',
      change: '+18.7%',
      trend: 'up',
      icon: '⭐',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const topCampaigns = [
    {
      name: 'Summer Flash Sale',
      revenue: '₹1,24,560',
      roi: '450%',
      customers: 2840,
      status: 'active',
      performance: 95
    },
    {
      name: 'Product Launch Campaign',
      revenue: '₹89,320',
      roi: '280%',
      customers: 1950,
      status: 'completed',
      performance: 87
    },
    {
      name: 'Welcome Series Automation',
      revenue: '₹67,890',
      roi: '320%',
      customers: 1560,
      status: 'active',
      performance: 92
    },
    {
      name: 'Loyalty Program Push',
      revenue: '₹45,210',
      roi: '195%',
      customers: 890,
      status: 'paused',
      performance: 68
    }
  ];

  const keyInsights = [
    {
      title: 'Peak Engagement Hours',
      description: 'Customers are most active between 7-9 PM on weekdays',
      actionable: 'Schedule campaigns for optimal timing',
      impact: 'high',
      icon: '🕐'
    },
    {
      title: 'Segment Performance',
      description: 'High-value customers show 3x better engagement rates',
      actionable: 'Increase focus on premium segments',
      impact: 'high',
      icon: '🎯'
    },
    {
      title: 'Channel Effectiveness',
      description: 'Email campaigns outperform SMS by 23% in conversion',
      actionable: 'Reallocate budget towards email marketing',
      impact: 'medium',
      icon: '📧'
    },
    {
      title: 'Seasonal Trends',
      description: 'Q4 campaigns generate 40% higher revenue',
      actionable: 'Prepare special Q4 campaign strategies',
      impact: 'high',
      icon: '📊'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Overview</h1>
          <p className="text-gray-600 mt-2">Track performance, gain insights, and optimize your campaigns</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex bg-white rounded-lg shadow-sm border">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeRange(range)}
                className={timeRange === range ? "bg-blue-600 text-white" : ""}
              >
                {range}
              </Button>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <div className="flex items-center">
                    <Badge 
                      variant="secondary" 
                      className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                    >
                      ↗ {stat.change}
                    </Badge>
                  </div>
                </div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {stat.icon}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics Tabs */}
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white shadow-sm">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="customers">Customer Insights</TabsTrigger>
          <TabsTrigger value="campaigns">Campaign Analysis</TabsTrigger>
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <PerformanceChart timeRange={timeRange} />
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <CustomerInsights />
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <CampaignBreakdown />
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          {/* AI-Powered Insights Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="text-2xl mr-2">🤖</span>
                  AI-Powered Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {keyInsights.map((insight, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{insight.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{insight.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{insight.description}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-blue-600 text-sm font-medium">{insight.actionable}</p>
                          <Badge 
                            variant={insight.impact === 'high' ? 'destructive' : 'secondary'}
                            className={insight.impact === 'high' 
                              ? 'bg-orange-100 text-orange-700 hover:bg-orange-100' 
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                            }
                          >
                            {insight.impact} impact
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Performing Campaigns */}
            <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  Top Performing Campaigns
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCampaigns.map((campaign, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                      <Badge 
                        variant={campaign.status === 'active' ? 'default' : campaign.status === 'completed' ? 'secondary' : 'outline'}
                        className={
                          campaign.status === 'active' 
                            ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
                            : campaign.status === 'completed'
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-100'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                        }
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Revenue</p>
                        <p className="font-semibold text-gray-900">{campaign.revenue}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">ROI</p>
                        <p className="font-semibold text-emerald-600">{campaign.roi}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Customers</p>
                        <p className="font-semibold text-gray-900">{campaign.customers.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                        <span>Performance Score</span>
                        <span>{campaign.performance}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${campaign.performance}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
