import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { Menu } from './Menu';

import './style.scss';

const Design = React.lazy(async () => import('./design'));
const Event = React.lazy(async () => import('./event'));
const Makeup = React.lazy(async () => import('./makeup'));
const Pet = React.lazy(async () => import('./pet'));
const Wellness = React.lazy(async () => import('./wellness'));
const Writing = React.lazy(async () => import('./writing'));

const Internal: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Enroll Online</title>
        <link rel="canonical" href="https://secure.qccareerschool.com/enroll2" />
        <link rel="manifest" href="/enroll2/internal/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/enroll2/internal/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/enroll2/internal/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/enroll2/internal/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/enroll2/internal/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/enroll2/internal/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/enroll2/design/" component={Design} />
          <Route path="/enroll2/event/" component={Event} />
          <Route path="/enroll2/makeup/" component={Makeup} />
          <Route path="/enroll2/pet/" component={Pet} />
          <Route path="/enroll2/wellness/" component={Wellness} />
          <Route path="/enroll2/writing/" component={Writing} />
          <Route component={Menu} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Internal;
