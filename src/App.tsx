import React from 'react';

import { StateProvider } from './providers/StateProvider';
import { Event } from './pages/event';
import { Makeup } from './pages/makeup';
import { ScreenWidthProvider } from './providers/ScreenWidthProvider';

const isMakeup = (domain: string) => [ 'makeup.localhost', 'enroll.qcmakeupacademy.com' ].includes(domain);
const isEvent = (domain: string) => [ 'event.localhost', 'enroll.qceventplanning.com' ].includes(domain);

const MakeupTheme = React.lazy(() => import('./pages/makeup/Theme'));
const EventTheme = React.lazy(() => import('./pages/event/Theme'));

export const App: React.FC = () => {
  const domain = window.location.hostname;
  return (
    <StateProvider>
      <ScreenWidthProvider>
        <ThemeSelector domain={domain}>
          {isMakeup(domain) && <Makeup />}
          {isEvent(domain) && <Event />}
        </ThemeSelector>
      </ScreenWidthProvider>
    </StateProvider>
  );
};

const ThemeSelector: React.FC<{ domain: string }> = ({ children, domain }) => {
  return (
    <React.Suspense fallback={<></>}>
      {isMakeup(domain) && <MakeupTheme />}
      {isEvent(domain) && <EventTheme />}
      {children}
    </React.Suspense>
  );
};
