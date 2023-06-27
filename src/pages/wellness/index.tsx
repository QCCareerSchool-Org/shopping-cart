import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';

import { LiveChat } from '../../components/LiveChat';
import { useStateContext } from '../../hooks/useStateContext';

import { WellnessDefault } from './default'; // don't lazily load the default cart to reduce CLS for most visitors
import { Footer } from './Footer';
import { Header } from './Header';

import './style.scss';

const Student = React.lazy(async () => import('./student'));
const Wellness150Off = React.lazy(async () => import('./150-off'));
const Wellness100Off = React.lazy(async () => import('./100-off'));
const Wellness50Off = React.lazy(async () => import('./50-off'));
const ContinuedEducation = React.lazy(async () => import('./continued-education').then(m => ({ default: m.WellnessContinuedEducation })));

const headerLink = (path: string): boolean => {
  return !/^\/\d{2,3}-off/u.test(path);
};

const Wellness: React.FC = () => {
  const { address } = useStateContext();

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6SYYDWV4WE"></script>
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
      <div className="wellness">
        <Header countryCode={address.countryCode} link={headerLink(location.pathname)} />
        <Routes>
          <Route path="/student/" element={<Student />} />
          <Route path="/150-off" element={<Suspense fallback={<></>}><Wellness150Off /></Suspense>} />
          <Route path="/100-off" element={<Suspense fallback={<></>}><Wellness100Off /></Suspense>} />
          <Route path="/50-off" element={<Suspense fallback={<></>}><Wellness50Off /></Suspense>} />
          <Route path="/continued-education/" element={<Suspense fallback={<></>}><ContinuedEducation /></Suspense>} />
          <Route path="*" element={<WellnessDefault />} />
        </Routes>
        <LiveChat license={1056788} group={19} gaVersion="gtag" />
        <Footer countryCode={address.countryCode} />
      </div>
    </>
  );
};

export default Wellness;
