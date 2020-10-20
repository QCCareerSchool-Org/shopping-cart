import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { Default } from './default';
import { Student } from './student';
import { HundredOff } from './100-off';
import { LimitedTimeOffer } from './limited-time-offer';
import { DeluxeKit } from './deluxe-kit';
import { Personal } from './personal';
import { useSaveablePaths } from '../../hooks/useSaveablePaths';

const Makeup: React.FC = () => {

  useSaveablePaths([
    /^\/limited-time-offer(\/.*)?$/,
    /^\/deluxe-kit(\/.*)?$/,
    /^\/100-off(\/.*)?$/,
    /^\/personal(\/.*)?$/,
  ]);

  return (
    <>
      <Helmet>
        <script async src="/js/gtag.js"></script>
        <script src="/makeup/gtag.js"></script>
        <title>Enroll Online - QC Makeup Academy</title>
        <link rel="canonical" href="https://enroll.qcmakeupacademy.com" />
        <link rel="manifest" href="/makeup/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/makeup/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/makeup/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/makeup/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/makeup/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/makeup/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/student/" component={Student} />
          <Route path="/100-off/" component={HundredOff} />
          <Route path="/deluxe-kit/" component={DeluxeKit} />
          <Route path="/limited-time-offer/" component={LimitedTimeOffer} />
          <Route path="/personal/" component={Personal} />
          <Route component={Default} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Makeup;
