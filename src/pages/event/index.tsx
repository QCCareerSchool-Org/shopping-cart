import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Default } from './default';
import { Footer } from './Footer';
import { Header } from './Header';

const Event: React.FC = () => (
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

export default Event;
