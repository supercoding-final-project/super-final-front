import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import App from './App.jsx';
import ToastProvider from './globalLayout/ToastProvider.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ToastProvider />
        <React.Suspense fallback={<div>Loading...</div>}>
          <App />
        </React.Suspense>
      </QueryClientProvider>
    </RecoilRoot>
  </>,
);
