import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Cart } from './components/Cart';
import { ErrorBoundary } from './components/ErrorBoundary';

const Resume = lazy(async () => import('./components/Resume'));

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>
          <Route path="/resume.html" element={<Suspense fallback={<></>}><Resume /></Suspense>} />
          <Route path="*" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ErrorBoundary>
);
