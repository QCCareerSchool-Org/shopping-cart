import React from 'react';

import { useSite } from '../hooks/useSite';
import { DateProvider } from '../providers/DateProvider';
import { ScreenWidthProvider } from '../providers/ScreenWidthProvider';
import { StateProvider } from '../providers/StateProvider';

const Makeup = React.lazy(() => import('../pages/makeup'));
const Event = React.lazy(() => import('../pages/event'));
const Design = React.lazy(() => import('../pages/design'));
const Wellness = React.lazy(() => import('../pages/wellness'));
const Writing = React.lazy(() => import('../pages/writing'));

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
            {site === 'makeup' && <Makeup />}
            {site === 'event' && <Event />}
            {site === 'design' && <Design />}
            {site === 'wellness' && <Wellness />}
            {site === 'writing' && <Writing />}
          </React.Suspense>
        </DateProvider>
      </ScreenWidthProvider>
    </StateProvider>
  );
};
