import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import MainContext from './context';
import 'antd/dist/antd.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainContext>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Root />
        </QueryClientProvider>
      </Router>
    </MainContext>
  </React.StrictMode>
);
