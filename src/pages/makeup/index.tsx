import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Default } from './default';
import { Student } from './student';
import { Footer } from './Footer';
import { Header } from './Header';

const Makeup: React.FC = () => (
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
        <Route component={Default} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </>
);

export default Makeup;
