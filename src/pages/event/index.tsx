import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LiveChat } from '../../components/LiveChat';

import { useSaveablePaths } from '../../hooks/useSaveablePaths';
import { useStateContext } from '../../hooks/useStateContext';

import { Footer } from './Footer';
import { Header } from './Header';

// import Default from './default';
// import Student from './student';
// import FreePortfolio from './free-portfolio';
// import TuitionDiscount from './tuition-discount';

const Default = React.lazy(() => import('./default'));
const Student = React.lazy(() => import('./student'));
const FreePortfolio = React.lazy(() => import('./free-portfolio'));
const TuitionDiscount = React.lazy(() => import('./tuition-discount'));

const Event: React.FC = () => {
  const { courses, address, price } = useStateContext();
  const currencyCode = price?.currency.code ?? 'USD';

  useSaveablePaths([
    /^\/free-portfolio(\/.*)?$/,
    /^\/tuition-discount(\/.*)?$/,
  ]);

  return (
    <>
      <Helmet>
        <script async src="/js/gtag.js"></script>
        <script src="/event/gtag.js"></script>
        <title>Enroll Online - QC Event School</title>
        <link rel="canonical" href="https://enroll.qceventplanning.com" />
        <link rel="manifest" href="/event/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/event/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/event/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/event/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/event/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/event/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      <Header countryCode={address.countryCode} />
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/student/" component={Student} />
            <Route path="/free-portfolio/" component={FreePortfolio} />
            <Route path="/tuition-discount/" render={props => <TuitionDiscount {...props} currencyCode={currencyCode} />} />
            <Route render={props => <Default {...props} courses={courses.selected} />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <LiveChat license={1056788} group={3} gaVersion="gtag" />
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Event;
