import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useSaveablePaths } from '../../hooks/useSaveablePaths';
import { useStateContext } from '../../hooks/useStateContext';

import { Footer } from './Footer';
import { Header } from './Header';

import './style.scss';

const Default = React.lazy(() => import('./default'));
const FreePortfolio = React.lazy(() => import('./free-portfolio'));
const Organizing = React.lazy(() => import('./organizing'));
const Student = React.lazy(() => import('./student'));
const TuitionDiscount = React.lazy(() => import('./tuition-discount'));

const Design: React.FC = () => {
  const { courses, address, price } = useStateContext();
  const currencyCode = price?.currency.code ?? 'USD';

  useSaveablePaths([
    /^\/free-portfolio(\/.*)?$/,
    /^\/tuition-discount(\/.*)?$/,
    /^\/organizing(\/.*)?$/,
  ]);

  return (
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
      <Header countryCode={address.countryCode} />
      <BrowserRouter>
        <Switch>
          <Route path="/free-portfolio/" component={FreePortfolio} />
          <Route path="/organizing/" render={props => <Organizing {...props} currencyCode={currencyCode} />} />
          <Route path="/student/" component={Student} />
          <Route path="/tuition-discount/" render={props => <TuitionDiscount {...props} currencyCode={currencyCode} />} />
          <Route render={props => <Default {...props} courses={courses.selected} />} />
        </Switch>
      </BrowserRouter>
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Design;
