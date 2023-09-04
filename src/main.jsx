import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import App from './App.jsx';
import ToastProvider from './components/globalLayout/ToastProvider.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ToastProvider />
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </>,
);
