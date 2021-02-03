import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Resume } from './components/Resume';
import { Cart } from './components/Cart';

export const App: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<></>}>
      <Switch>
        <Route path="/resume.html" component={Resume} />
        <Route component={Cart} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);
