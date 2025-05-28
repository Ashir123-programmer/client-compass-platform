
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { LoginPage } from '../components/LoginPage';
import { Layout } from '../components/Layout';
import { Dashboard } from '../components/Dashboard';

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <LoginPage />;
  }

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default Index;
