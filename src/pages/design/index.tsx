import React, { lazy, memo, ReactElement, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { LiveChat } from '../../components/LiveChat';

import { useSaveablePaths } from '../../hooks/useSaveablePaths';
import { useStateContext } from '../../hooks/useStateContext';

// don't lazily load the default cart to reduce CLS for most visitors
import { DesignDefault } from './default';
import { Footer } from './Footer';
import { Header } from './Header';

import './style.scss';

// lazily load the other carts because they're used less often
const Bogo1 = lazy(async () => import('./bogo-1'));
const Bogo2 = lazy(async () => import('./bogo-2'));
const Bogo3 = lazy(async () => import('./bogo-3'));
const Bogo4 = lazy(async () => import('./bogo-4'));
const Bogo5 = lazy(async () => import('./bogo-5'));
const FreePortfolio = lazy(async () => import('./free-portfolio'));
const Organizing = lazy(async () => import('./organizing'));
const Student = lazy(async () => import('./student'));
const TuitionDiscount = lazy(async () => import('./tuition-discount'));
const Masterclass = lazy(async () => import('./masterclass-200-off'));
const Masterclass150 = lazy(async () => import('./masterclass-offer-150-off'));
const ContinuedEducation = lazy(async () => import('./continued-education').then(m => ({ default: m.DesignContinuedEducation })));

const Design = memo((): ReactElement => {
  const { address } = useStateContext();

  useSaveablePaths([
    /^\/free-portfolio(\/.*)?$/u,
    /^\/tuition-discount(\/.*)?$/u,
    /^\/organizing(\/.*)?$/u,
  ]);

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-3632503-1"></script>
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
      <div className="design">
        <Header countryCode={address.countryCode} />
        <Routes>
          <Route path="/bogo-1/" element={<Suspense fallback={<></>}><Bogo1 /></Suspense>} />
          <Route path="/bogo-2/" element={<Suspense fallback={<></>}><Bogo2 /></Suspense>} />
          <Route path="/bogo-3/" element={<Suspense fallback={<></>}><Bogo3 /></Suspense>} />
          <Route path="/bogo-4/" element={<Suspense fallback={<></>}><Bogo4 /></Suspense>} />
          <Route path="/bogo-5/" element={<Suspense fallback={<></>}><Bogo5 /></Suspense>} />
          <Route path="/free-portfolio/" element={<Suspense fallback={<></>}><FreePortfolio /></Suspense>} />
          <Route path="/organizing/" element={<Suspense fallback={<></>}><Organizing /></Suspense>} />
          <Route path="/student/" element={<Suspense fallback={<></>}><Student /></Suspense>} />
          <Route path="/tuition-discount/" element={<Suspense fallback={<></>}><TuitionDiscount /></Suspense>} />
          <Route path="/masterclass-200-off/" element={<Suspense fallback={<></>}><Masterclass /></Suspense>} />
          <Route path="/masterclass-offer-150-off/" element={<Suspense fallback={<></>}><Masterclass150 /></Suspense>} />
          <Route path="/continued-education/" element={<Suspense fallback={<></>}><ContinuedEducation /></Suspense>} />
          <Route path="*" element={<DesignDefault />} />
        </Routes>
        <LiveChat license={1056788} group={3} gaVersion="gtag" />
        <Footer countryCode={address.countryCode} />
      </div>
    </>
  );
});

Design.displayName = 'Design';

export default Design;
