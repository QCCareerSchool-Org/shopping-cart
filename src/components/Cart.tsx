import React from 'react';

import { useSite } from '../hooks/useSite';
import { DateProvider } from '../providers/DateProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { StateProvider } from '../providers/StateProvider';

// lazily load the different schools because we're only ever going to need one of them
// note: because these components use global styles, we must load them lazily
const Design = React.lazy(() => import('../pages/design'));
const Event = React.lazy(() => import('../pages/event'));
const Makeup = React.lazy(() => import('../pages/makeup'));
const Pet = React.lazy(() => import('../pages/pet'));
const Wellness = React.lazy(() => import('../pages/wellness'));
const Writing = React.lazy(() => import('../pages/writing'));
const Internal = React.lazy(() => import('../pages/internal'));

export const Cart: React.FC = () => {
  const site = useSite();
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
