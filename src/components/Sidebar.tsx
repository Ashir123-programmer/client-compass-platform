
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: '📊' },
  { name: 'Customers', path: '/customers', icon: '👥' },
  { name: 'Campaigns', path: '/campaigns', icon: '📧' },
  { name: 'Segments', path: '/segments', icon: '🎯' },
  { name: 'Analytics', path: '/analytics', icon: '📈' },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-50",
              location.pathname === item.path 
                ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg" 
                : "text-gray-700 hover:text-blue-600"
            )}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
