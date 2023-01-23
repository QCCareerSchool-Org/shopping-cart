import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LiveChat } from '../../components/LiveChat';

import { useStateContext } from '../../hooks/useStateContext';

import { PetDefault } from './default'; // don't lazily load the default cart to reduce CLS for most visitors
import { Footer } from './Footer';
import { Header } from './Header';

import './style.scss';

// lazily load the other carts because they're used less often
const Student = React.lazy(async () => import('./student'));
const WoofGang = React.lazy(async () => import('./woof-gang'));
const Grooming300Off = React.lazy(async () => import('./grooming-300-off'));
const Grooming200Off = React.lazy(async () => import('./grooming-200-off'));
const Grooming150Off = React.lazy(async () => import('./grooming-150-off'));
const Training300Off = React.lazy(async () => import('./training-300-off'));
const Training200Off = React.lazy(async () => import('./training-200-off'));
const Training150Off = React.lazy(async () => import('./training-150-off'));

const headerLink = (path: string): boolean => {
  return !/^\/(grooming|trainging)-\d{3}-off/u.test(path);
};

const Pet: React.FC = () => {
  const { address } = useStateContext();
  const location = useLocation();

  return (
    <>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-3632503-31"></script>
        <script src="/pet/gtag.js"></script>
        <title>Enroll Online - QC Pet Studies</title>
        <link rel="canonical" href="https://enroll.qcpetstudies.com" />
        <link rel="manifest" href="/pet/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/pet/apple-touch-icon.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="32x32" href="/pet/favicon-32x32.png?v=QEMKdlwA73" />
        <link rel="icon" type="image/png" sizes="16x16" href="/pet/favicon-16x16.png?v=QEMKdlwA73" />
        <link rel="mask-icon" href="/pet/safari-pinned-tab.svg?v=QEMKdlwA73" color="#5bbad5" />
        <link rel="shortcut icon" href="/pet/favicon.ico?v=QEMKdlwA73" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Helmet>
      <Header countryCode={address.countryCode} link={headerLink(location.pathname)} />
      <Routes>
        <Route path="/student/" element={<Student />} />
        <Route path="/woof-gang-bakery" element={<Suspense fallback={<></>}><WoofGang /></Suspense>} />
        <Route path="/grooming-300-off/" element={<Suspense fallback={<></>}><Grooming300Off /></Suspense>} />
        <Route path="/grooming-200-off/" element={<Suspense fallback={<></>}><Grooming200Off /></Suspense>} />
        <Route path="/grooming-150-off/" element={<Suspense fallback={<></>}><Grooming150Off /></Suspense>} />
        <Route path="/training-300-off/" element={<Suspense fallback={<></>}><Training300Off /></Suspense>} />
        <Route path="/training-200-off/" element={<Suspense fallback={<></>}><Training200Off /></Suspense>} />
        <Route path="/training-150-off/" element={<Suspense fallback={<></>}><Training150Off /></Suspense>} />
        <Route path="*" element={<PetDefault />} />
      </Routes>
      <LiveChat license={1056788} group={18} gaVersion="gtag" />
      <Footer countryCode={address.countryCode} />
    </>
  );
};

export default Pet;
