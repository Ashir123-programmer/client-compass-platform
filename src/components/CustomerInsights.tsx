
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const CustomerInsights: React.FC = () => {
  const customerSegments = [
    {
      name: 'High Value Customers',
      count: 1240,
      percentage: 12,
      avgSpend: '₹45,680',
      growth: '+15%',
      color: 'bg-emerald-500'
    },
    {
      name: 'Regular Customers',
      count: 4560,
      percentage: 45,
      avgSpend: '₹12,340',
      growth: '+8%',
      color: 'bg-blue-500'
    },
    {
      name: 'New Customers',
      count: 2890,
      percentage: 28,
      avgSpend: '₹3,450',
      growth: '+23%',
      color: 'bg-purple-500'
    },
    {
      name: 'At-Risk Customers',
      count: 1520,
      percentage: 15,
      avgSpend: '₹8,920',
      growth: '-5%',
      color: 'bg-orange-500'
    }
  ];

  const behaviorMetrics = [
    {
      metric: 'Email Open Rate',
      value: '68%',
      target: '65%',
      status: 'above',
      trend: '+3.2%'
    },
    {
      metric: 'Click-through Rate',
      value: '24%',
      target: '25%',
      status: 'below',
      trend: '-1.1%'
    },
    {
      metric: 'Purchase Conversion',
      value: '12%',
      target: '10%',
      status: 'above',
      trend: '+2.8%'
    },
    {
      metric: 'Customer Retention',
      value: '85%',
      target: '80%',
      status: 'above',
      trend: '+4.5%'
    }
  ];

  const topCustomers = [
    {
      name: 'Rajesh Kumar',
      email: 'rajesh.k@email.com',
      totalSpent: '₹1,24,500',
      orders: 23,
      lastPurchase: '2 days ago',
      segment: 'VIP'
    },
    {
      name: 'Priya Sharma',
      email: 'priya.s@email.com',
      totalSpent: '₹89,200',
      orders: 18,
      lastPurchase: '1 week ago',
      segment: 'High Value'
    },
    {
      name: 'Amit Patel',
      email: 'amit.p@email.com',
      totalSpent: '₹67,800',
      orders: 15,
      lastPurchase: '3 days ago',
      segment: 'High Value'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Customer Segments */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Customer Segments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {customerSegments.map((segment, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-4 h-4 rounded-full ${segment.color}`}></div>
                  <Badge 
                    variant={segment.growth.startsWith('+') ? 'default' : 'destructive'}
                    className={segment.growth.startsWith('+') 
                      ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' 
                      : 'bg-red-100 text-red-700 hover:bg-red-100'
                    }
                  >
                    {segment.growth}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{segment.name}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-1">{segment.count.toLocaleString()}</p>
                <p className="text-sm text-gray-600 mb-2">Avg. Spend: {segment.avgSpend}</p>
                <Progress value={segment.percentage} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">{segment.percentage}% of total customers</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Behavior Metrics */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Behavior Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {behaviorMetrics.map((metric, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{metric.metric}</h4>
                  <Badge 
                    variant={metric.status === 'above' ? 'default' : 'secondary'}
                    className={metric.status === 'above' 
                      ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' 
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-100'
                    }
                  >
                    {metric.trend}
                  </Badge>
                </div>
                <div className="flex items-end space-x-2 mb-2">
                  <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                  <span className="text-sm text-gray-600">target: {metric.target}</span>
                </div>
                <Progress 
                  value={parseInt(metric.value)} 
                  className="h-2"
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Customers */}
        <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Top Customers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCustomers.map((customer, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{customer.name}</h4>
                      <p className="text-sm text-gray-600">{customer.email}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    {customer.segment}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600">Total Spent</p>
                    <p className="font-semibold text-gray-900">{customer.totalSpent}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Orders</p>
                    <p className="font-semibold text-gray-900">{customer.orders}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Last Purchase</p>
                    <p className="font-semibold text-gray-900">{customer.lastPurchase}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
