import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { LiveChat } from '../../components/LiveChat';
import { useStateContext } from '../../hooks/useStateContext';

import Default from './default'; // don't lazily load the default cart to reduce CLS for most visitors
import { Footer } from './Footer';
import { Header } from './Header';

import './style.scss';

const Wellness: React.FC = () => {
  const { address, price } = useStateContext();
  const currencyCode = price?.currency.code ?? 'USD';

  return (
    <>
      <Helmet>
        <script async src="/js/gtag.js"></script>
        <script src="/wellness/gtag.js"></script>
        <title>Enroll Online - QC Wellness Studies</title>
        <link rel="canonical" href="https://enroll.qcwellnessstudies.com" />
        <link rel="manifest" href="/wellness/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/wellness/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/wellness/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/wellness/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/wellness/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/wellness/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      <Header countryCode={address.countryCode} />
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Switch>
            <Route render={props => <Default {...props} currencyCode={currencyCode} />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <LiveChat license={1056788} group={19} gaVersion="gtag" />
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Wellness;
