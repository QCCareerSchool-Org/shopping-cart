import { useLocation } from '@qccareerschool/hooks';
import React, { lazy, ReactElement, Suspense } from 'react';

import { getSite } from '../lib/getSite';
import { DateProvider } from '../providers/DateProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { StateProvider } from '../providers/StateProvider';

// lazily load the different schools because we're only ever going to need one of them
// note: because these components each use global styles, we *must* load them lazily or they will conflict
const Design = lazy(async () => import('../pages/design'));
const Event = lazy(async () => import('../pages/event'));
const Makeup = lazy(async () => import('../pages/makeup'));
const Pet = lazy(async () => import('../pages/pet'));
const Wellness = lazy(async () => import('../pages/wellness'));
const Writing = lazy(async () => import('../pages/writing'));
const Internal = lazy(async () => import('../pages/internal'));

export const Cart = (): ReactElement | null => {
  const { hostname } = useLocation();
  const site = getSite(hostname);
  if (!site) {
    return null;
  }
  return (
    <StateProvider>
      <ScreenWidthProvider>
        <DateProvider>
          <Suspense fallback={<></>}>
            {site === 'design' && <Design />}
            {site === 'event' && <Event />}
            {site === 'makeup' && <Makeup />}
            {site === 'pet' && <Pet />}
            {site === 'wellness' && <Wellness />}
            {site === 'writing' && <Writing />}
            {site === 'internal' && <Internal />}
          </Suspense>
        </DateProvider>
      </ScreenWidthProvider>
    </StateProvider>
  );
};
