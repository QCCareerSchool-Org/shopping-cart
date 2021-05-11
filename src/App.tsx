import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Cart } from './components/Cart';
import { Resume } from './components/Resume';

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/resume.html" component={Resume} />
          <Route component={Cart} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </QueryClientProvider>
);
