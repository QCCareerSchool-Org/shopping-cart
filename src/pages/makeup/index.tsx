import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { LiveChat } from '../../components/LiveChat';

import { useSaveablePaths } from '../../hooks/useSaveablePaths';
import { useStateContext } from '../../hooks/useStateContext';

import { MakeupDefault } from './default'; // don't lazily load the default cart to reduce CLS for most visitors
import { Footer } from './Footer';
import { Header } from './Header';

import './style.scss';

// lazily load the other carts because they're used less often
const Student = React.lazy(async () => import('./student'));
const ProPlusLuminousKit = React.lazy(async () => import('./pro-plus-luminous-kit'));
const FreeSkincare = React.lazy(async () => import('./free-skincare'));
const ContinuedEducation = React.lazy(async () => import('./continued-education').then(m => ({ default: m.MakeupContinuedEducation })));

const Makeup: React.FC = () => {
  const { address } = useStateContext();

  useSaveablePaths([
    /^\/limited-time-offer(\/.*)?$/u,
    /^\/deluxe-kit(\/.*)?$/u,
    /^\/100-off(\/.*)?$/u,
    /^\/personal(\/.*)?$/u,
  ]);

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BS7XJJLV0G"></script>
        <script src="/makeup/gtag.js"></script>
        <title>Enroll Online - QC Makeup Academy</title>
        <link rel="canonical" href="https://enroll.qcmakeupacademy.com" />
        <link rel="manifest" href="/makeup/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/makeup/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/makeup/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/makeup/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/makeup/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/makeup/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
        <script src="/makeup/perfect-audience.js"></script>
      </Helmet>
      <div className="makeup">
        <Header countryCode={address.countryCode} />
        <Routes>
          <Route path="/pro-plus-luminous-kit/" element={<Suspense fallback={<></>}><ProPlusLuminousKit /></Suspense>} />
          <Route path="/free-skincare/" element={<Suspense fallback={<></>}><FreeSkincare /></Suspense>} />
          <Route path="/student/" element={<Suspense fallback={<></>}><Student /></Suspense>} />
          <Route path="/continued-education/" element={<Suspense fallback={<></>}><ContinuedEducation /></Suspense>} />
          <Route path="*" element={<MakeupDefault />} />
        </Routes>
        <LiveChat license={1056788} group={14} gaVersion="gtag" />
        <Footer countryCode={address.countryCode} />
      </div>
    </>
  );
};

export default Makeup;
