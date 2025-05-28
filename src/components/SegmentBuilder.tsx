
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Rule {
  id: string;
  field: string;
  operator: string;
  value: string;
  logic?: 'AND' | 'OR';
}

export const SegmentBuilder: React.FC = () => {
  const [rules, setRules] = useState<Rule[]>([
    { id: '1', field: 'spend', operator: '>', value: '10000' }
  ]);
  const [segmentName, setSegmentName] = useState('');
  const [audienceSize, setAudienceSize] = useState(1247);

  const fields = [
    { value: 'spend', label: 'Total Spend' },
    { value: 'visits', label: 'Website Visits' },
    { value: 'lastPurchase', label: 'Last Purchase' },
    { value: 'age', label: 'Age' },
    { value: 'location', label: 'Location' },
  ];

  const operators = [
    { value: '>', label: 'Greater than' },
    { value: '<', label: 'Less than' },
    { value: '=', label: 'Equals' },
    { value: '!=', label: 'Not equals' },
    { value: 'contains', label: 'Contains' },
  ];

  const addRule = () => {
    const newRule: Rule = {
      id: Date.now().toString(),
      field: 'spend',
      operator: '>',
      value: '',
      logic: 'AND'
    };
    setRules([...rules, newRule]);
  };

  const updateRule = (id: string, updates: Partial<Rule>) => {
    setRules(rules.map(rule => rule.id === id ? { ...rule, ...updates } : rule));
  };

  const removeRule = (id: string) => {
    setRules(rules.filter(rule => rule.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Audience Segmentation</h1>
      
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Build Your Segment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Segment Name</label>
            <Input
              value={segmentName}
              onChange={(e) => setSegmentName(e.target.value)}
              placeholder="Enter segment name"
              className="bg-white/70"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Rules</h3>
            {rules.map((rule, index) => (
              <div key={rule.id} className="space-y-3">
                {index > 0 && (
                  <div className="flex justify-center">
                    <Select value={rule.logic} onValueChange={(value) => updateRule(rule.id, { logic: value as 'AND' | 'OR' })}>
                      <SelectTrigger className="w-20 bg-white/70">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AND">AND</SelectItem>
                        <SelectItem value="OR">OR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg border border-gray-200">
                  <Select value={rule.field} onValueChange={(value) => updateRule(rule.id, { field: value })}>
                    <SelectTrigger className="w-40 bg-white/70">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {fields.map(field => (
                        <SelectItem key={field.value} value={field.value}>{field.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={rule.operator} onValueChange={(value) => updateRule(rule.id, { operator: value })}>
                    <SelectTrigger className="w-32 bg-white/70">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {operators.map(op => (
                        <SelectItem key={op.value} value={op.value}>{op.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Input
                    value={rule.value}
                    onChange={(e) => updateRule(rule.id, { value: e.target.value })}
                    placeholder="Value"
                    className="bg-white/70"
                  />

                  {rules.length > 1 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeRule(rule.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      Remove
                    </Button>
                  )}
                </div>
              </div>
            ))}

            <Button variant="outline" onClick={addRule} className="w-full">
              Add Rule
            </Button>
          </div>

          <div className="p-4 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Audience Preview</h4>
                <p className="text-sm text-gray-600">Estimated audience size</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{audienceSize.toLocaleString()}</p>
                <p className="text-sm text-gray-600">customers</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white flex-1">
              Save Segment
            </Button>
            <Button variant="outline" className="flex-1">
              Preview Customers
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
