import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { LiveChat } from '../../components/LiveChat';

import { useSaveablePaths } from '../../hooks/useSaveablePaths';
import { useStateContext } from '../../hooks/useStateContext';

import Default from './default';
import { Footer } from './Footer';
import { Header } from './Header';

// don't lazily load the default cart to reduce CLS for most visitors

import './style.scss';

// lazily load the other carts because they're used less often
const FreePortfolio = React.lazy(async () => import('./free-portfolio'));
const Organizing = React.lazy(async () => import('./organizing'));
const Student = React.lazy(async () => import('./student'));
const TuitionDiscount = React.lazy(async () => import('./tuition-discount'));

const Design: React.FC = () => {
  const { courses, address, price } = useStateContext();
  const currencyCode = price?.currency.code ?? 'USD';

  useSaveablePaths([
    /^\/free-portfolio(\/.*)?$/u,
    /^\/tuition-discount(\/.*)?$/u,
    /^\/organizing(\/.*)?$/u,
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
        <script src="/design/perfect-audience.js"></script>
      </Helmet>
      <Header countryCode={address.countryCode} />
      <Routes>
        <Route path="/free-portfolio/" element={<Suspense fallback={<></>}><FreePortfolio /></Suspense>} />
        <Route path="/organizing/" element={<Suspense fallback={<></>}><Organizing currencyCode={currencyCode} /></Suspense>} />
        <Route path="/student/" element={<Suspense fallback={<></>}><Student /></Suspense>} />
        <Route path="/tuition-discount/" element={<Suspense fallback={<></>}><TuitionDiscount currencyCode={currencyCode} /></Suspense>} />
        <Route path="*" element={<Default courses={courses.selected} currencyCode={currencyCode} />} />
      </Routes>
      <LiveChat license={1056788} group={3} gaVersion="gtag" />
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Design;
