
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface PerformanceChartProps {
  timeRange: string;
}

export const PerformanceChart: React.FC<PerformanceChartProps> = ({ timeRange }) => {
  const performanceData = [
    { name: 'Week 1', revenue: 45000, customers: 1200, campaigns: 8 },
    { name: 'Week 2', revenue: 52000, customers: 1450, campaigns: 12 },
    { name: 'Week 3', revenue: 48000, customers: 1300, campaigns: 10 },
    { name: 'Week 4', revenue: 61000, customers: 1680, campaigns: 15 },
    { name: 'Week 5', revenue: 58000, customers: 1520, campaigns: 13 },
    { name: 'Week 6', revenue: 67000, customers: 1890, campaigns: 18 }
  ];

  const channelData = [
    { name: 'Email', value: 45, color: '#3B82F6' },
    { name: 'SMS', value: 25, color: '#10B981' },
    { name: 'Push', value: 20, color: '#8B5CF6' },
    { name: 'Social', value: 10, color: '#F59E0B' }
  ];

  const conversionData = [
    { name: 'Mon', opened: 850, clicked: 340, converted: 125 },
    { name: 'Tue', opened: 920, clicked: 380, converted: 145 },
    { name: 'Wed', opened: 780, clicked: 290, converted: 98 },
    { name: 'Thu', opened: 1100, clicked: 450, converted: 168 },
    { name: 'Fri', opened: 950, clicked: 410, converted: 155 },
    { name: 'Sat', opened: 680, clicked: 245, converted: 89 },
    { name: 'Sun', opened: 590, clicked: 201, converted: 72 }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Performance Chart */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Revenue & Customer Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#1D4ED8' }}
              />
              <Line 
                type="monotone" 
                dataKey="customers" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#059669' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Channel Distribution */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Channel Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={channelData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {channelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {channelData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Conversion Funnel */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900">Weekly Conversion Funnel</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={conversionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="opened" fill="#93C5FD" name="Opened" />
              <Bar dataKey="clicked" fill="#3B82F6" name="Clicked" />
              <Bar dataKey="converted" fill="#1D4ED8" name="Converted" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
