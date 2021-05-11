import { useLocation } from '@qccareerschool/hooks';
import React from 'react';

import { getSite } from '../lib/getSite';
import { DateProvider } from '../providers/DateProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { StateProvider } from '../providers/StateProvider';

// lazily load the different schools because we're only ever going to need one of them
// note: because these components use global styles, we must load them lazily
const Design = React.lazy(async () => import('../pages/design'));
const Event = React.lazy(async () => import('../pages/event'));
const Makeup = React.lazy(async () => import('../pages/makeup'));
const Pet = React.lazy(async () => import('../pages/pet'));
const Wellness = React.lazy(async () => import('../pages/wellness'));
const Writing = React.lazy(async () => import('../pages/writing'));
const Internal = React.lazy(async () => import('../pages/internal'));

export const Cart: React.FC = () => {
  const { hostname } = useLocation();
  const site = getSite(hostname);
  if (!site) {
    return null;
  }
  return (
    <StateProvider>
      <ScreenWidthProvider>
        <DateProvider>
          <React.Suspense fallback={<></>}>
            {site === 'design' && <Design />}
            {site === 'event' && <Event />}
            {site === 'makeup' && <Makeup />}
            {site === 'pet' && <Pet />}
            {site === 'wellness' && <Wellness />}
            {site === 'writing' && <Writing />}
            {site === 'internal' && <Internal />}
          </React.Suspense>
        </DateProvider>
      </ScreenWidthProvider>
    </StateProvider>
  );
};
