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

// lazily load the other carts because they're used less often
const Student = React.lazy(() => import('./student'));

const Pet: React.FC = () => {
  const { address, price } = useStateContext();
  const currencyCode = price?.currency.code ?? 'USD';

  return (
    <>
      <Helmet>
        <script async src="/js/gtag.js"></script>
        <script src="/pet/gtag.js"></script>
        <title>Enroll Online - QC Pet Studies</title>
        <link rel="canonical" href="https://enroll.doggroomingcourse.com" />
        <link rel="manifest" href="/pet/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/pet/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/pet/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pet/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/pet/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/pet/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      <Header countryCode={address.countryCode} />
      <BrowserRouter>
        <Suspense fallback={<></>}>
          <Switch>
            <Route path="/student/" component={Student} />
            <Route render={props => <Default {...props} currencyCode={currencyCode} />} />
          </Switch>
        </Suspense>
      </BrowserRouter>
      <LiveChat license={1056788} group={18} gaVersion="gtag" />
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Pet;
