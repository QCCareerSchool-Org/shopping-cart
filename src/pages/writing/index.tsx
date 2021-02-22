import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LiveChat } from '../../components/LiveChat';

import { useStateContext } from '../../hooks/useStateContext';

import { Footer } from './Footer';
import { Header } from './Header';

// don't lazily load the default cart to reduce CLS for most visitors
import Default from './default';

import './style.scss';

const Writing: React.FC = () => {
  const { address } = useStateContext();

  return (
    <>
      <Helmet>
        <script async src="/js/gtag.js"></script>
        <script src="/writing/gtag.js"></script>
        <title>Enroll Online - Winghill Writing School</title>
        <link rel="canonical" href="https://enroll.winghill.com" />
        <link rel="manifest" href="/writing/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/writing/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/writing/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/writing/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/writing/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/writing/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      <Header countryCode={address.countryCode} />
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Switch>
            <Route component={Default} />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <LiveChat license={1056788} group={13} gaVersion="gtag" />
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Writing;
