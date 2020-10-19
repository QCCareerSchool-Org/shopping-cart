import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Default } from './default';
import { Student } from './student';
import { Footer } from './Footer';
import { Header } from './Header';

const Design: React.FC = () => (
  <>
    <Helmet>
      <script async src="/js/gtag.js"></script>
      <script src="/design/gtag.js"></script>
      <title>Enroll Online - QC Design School</title>
      <link rel="canonical" href="https://enroll.qcdesignschool.com" />
      <link rel="manifest" href="/design/manifest.json" />
      <link rel="apple-touch-icon" sizes="180x180" href="/design/apple-touch-icon.png?v=QEMKdlwA73" />
      <link rel="icon" type="image/png" sizes="32x32" href="/design/favicon-32x32.png?v=QEMKdlwA73" />
      <link rel="icon" type="image/png" sizes="16x16" href="/design/favicon-16x16.png?v=QEMKdlwA73" />
      <link rel="mask-icon" href="/design/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
      <link rel="shortcut icon" href="/design/favicon.ico?v=QEMKdlwA73" />
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

export default Design;
