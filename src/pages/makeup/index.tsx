import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Default } from './default';
import { Student } from './student';
import { Footer } from './Footer';
import { Header } from './Header';

const Makeup: React.FC = () => (
  <>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route path="/student/" component={Student} />
        <Route component={Default} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>
);

export default Makeup;
