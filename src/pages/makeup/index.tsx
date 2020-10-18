import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Default } from './default';
import { Footer } from './Footer';
import { Header } from './Header';

export const Makeup: React.FC = () => (
  <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route component={Default} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>
);
