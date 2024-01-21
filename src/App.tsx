import React from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Exchange from './components/exchange/exchange';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Exchange />
    </QueryClientProvider>
  );
};

export default App;
