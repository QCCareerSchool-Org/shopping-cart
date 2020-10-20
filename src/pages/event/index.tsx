import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useSaveablePaths } from '../../hooks/useSaveablePaths';
import { useStateContext } from '../../hooks/useStateContext';

import { Footer } from './Footer';
import { Header } from './Header';

import { Default } from './default';
import { Student } from './student';
import { FreePortfolio } from './free-portfolio';
import { TuitionDiscount } from './tuition-discount';
import { useSelectorContext } from '../../hooks/useSelectorContext';

const Event: React.FC = () => {
  const countryCode = useSelectorContext(s => s.address.countryCode);
  const currencyCode = useSelectorContext(s => s.price?.currency.code ?? 'USD');
  const courses = useSelectorContext(s => s.courses.selected);

  useSaveablePaths([
    /^\/free-portfolio(\/.*)?$/,
    /^\/tuition-discount(\/.*)?$/,
  ]);

  console.log('event rerender', countryCode, currencyCode, courses); // eslint-disable-line

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
      <Header countryCode={countryCode} />
      <BrowserRouter>
        <Switch>
          <Route path="/student/" component={Student} />
          <Route path="/free-portfolio/" component={FreePortfolio} />
          <Route path="/tuition-discount/" render={props => <TuitionDiscount {...props} currencyCode={currencyCode} />} />
          <Route render={props => <Default {...props} courses={courses} />} />
        </Switch>
      </BrowserRouter>
      <Footer countryCode={countryCode} />
    </>
  );
};

export default Event;
