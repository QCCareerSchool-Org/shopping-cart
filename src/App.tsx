import React from 'react';

import { StateProvider } from './providers/StateProvider';
import { ScreenWidthProvider } from './providers/ScreenWidthProvider';
import { DateProvider } from './providers/DateProvider';

import { useSite } from './hooks/useSite';

const Makeup = React.lazy(() => import('./pages/makeup'));
const Event = React.lazy(() => import('./pages/event'));
const Design = React.lazy(() => import('./pages/design'));
const Wellness = React.lazy(() => import('./pages/wellness'));

export const App: React.FC = () => {
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
          </React.Suspense>
        </DateProvider>
      </ScreenWidthProvider>
    </StateProvider>
  );
};
