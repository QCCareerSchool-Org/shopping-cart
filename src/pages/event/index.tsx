import React, { ReactElement, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { LiveChat } from '../../components/LiveChat';

import { useSaveablePaths } from '../../hooks/useSaveablePaths';
import { useStateContext } from '../../hooks/useStateContext';

// don't lazily load the default cart to reduce CLS for most visitors
import { EventDefault } from './default';
import { Footer } from './Footer';
import { Header } from './Header';

import './style.scss';

// lazily load the other carts because they're used less often
const Bogo1 = React.lazy(async () => import('./bogo-1'));
const Bogo2 = React.lazy(async () => import('./bogo-2'));
const FreeSpecialty = React.lazy(async () => import('./free-specialty'));
const FreeSpecialty2 = React.lazy(async () => import('./free-specialty-2'));
const TwoFreeSpecialty = React.lazy(async () => import('./2-free-specialty'));
const TwoFreeSpecialtyMasterclass = React.lazy(async () => import('./2-free-specialty-masterclass').then(m => ({ default: m.TwoFreeSpecialtyMasterclass })));
const Student = React.lazy(async () => import('./student'));
const FreePortfolio = React.lazy(async () => import('./free-portfolio'));
const TuitionDiscount = React.lazy(async () => import('./tuition-discount'));
const Floral = React.lazy(async () => import('./floral'));

const Event = (): ReactElement => {
  const { address } = useStateContext();

  useSaveablePaths([
    /^\/free-portfolio(\/.*)?$/u,
    /^\/tuition-discount(\/.*)?$/u,
    /^\/floral(\/.*)?$/u,
  ]);

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-3632503-10"></script>
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
        <script src="/event/perfect-audience.js"></script>
      </Helmet>
      <Header countryCode={address.countryCode} />
      <Routes>
        <Route path="/bogo-1/" element={<Suspense fallback={<></>}><Bogo1 /></Suspense>} />
        <Route path="/bogo-2/" element={<Suspense fallback={<></>}><Bogo2 /></Suspense>} />
        <Route path="/free-specialty/" element={<Suspense fallback={<></>}><FreeSpecialty /></Suspense>} />
        <Route path="/free-specialty-2/" element={<Suspense fallback={<></>}><FreeSpecialty2 /></Suspense>} />
        <Route path="/2-free-specialty/" element={<Suspense fallback={<></>}><TwoFreeSpecialty /></Suspense>} />
        <Route path="/2-free-specialty-masterclass/" element={<Suspense fallback={<></>}><TwoFreeSpecialtyMasterclass /></Suspense>} />
        <Route path="/student/" element={<Suspense fallback={<></>}><Student /></Suspense>} />
        <Route path="/free-portfolio/" element={<Suspense fallback={<></>}><FreePortfolio /></Suspense>} />
        <Route path="/tuition-discount/" element={<Suspense fallback={<></>}><TuitionDiscount /></Suspense>} />
        <Route path="/floral/" element={<Suspense fallback={<></>}><Floral /></Suspense>} />
        <Route path="*" element={<EventDefault />} />
      </Routes>
      <LiveChat license={1056788} group={1} gaVersion="gtag" />
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Event;
