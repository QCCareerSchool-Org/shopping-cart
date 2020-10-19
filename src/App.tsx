import React from 'react';

import { StateProvider } from './providers/StateProvider';
import { ScreenWidthProvider } from './providers/ScreenWidthProvider';

const isMakeup = (domain: string) => [ 'makeup.localhost', 'enroll.qcmakeupacademy.com' ].includes(domain);
const isEvent = (domain: string) => [ 'event.localhost', 'enroll.qceventplanning.com' ].includes(domain);
const isDesign = (domain: string) => [ 'design.localhost', 'enroll.qcdesignschool.com' ].includes(domain);

type Site = 'makeup' | 'event' | 'design' | 'pet';
const getSite = (domain: string): Site => {
  if (isMakeup(domain)) {
    return 'makeup';
  }
  if (isEvent(domain)) {
    return 'event';
  }
  if (isDesign(domain)) {
    return 'design';
  }
  throw Error(`invalid domain name: ${domain}`);
};

const MakeupTheme = React.lazy(() => import('./pages/makeup/Theme'));
const EventTheme = React.lazy(() => import('./pages/event/Theme'));
const DesignTheme = React.lazy(() => import('./pages/design/Theme'));

const Makeup = React.lazy(() => import('./pages/makeup'));
const Event = React.lazy(() => import('./pages/event'));
const Design = React.lazy(() => import('./pages/design'));

export const App: React.FC = () => {
  const site = getSite(window.location.hostname);
  return (
    <StateProvider>
      <ScreenWidthProvider>
        <ThemeSelector site={site}>
          <React.Suspense fallback={<>LOADING</>}>
            {site === 'makeup' && <Makeup />}
            {site === 'event' && <Event />}
            {site === 'design' && <Design />}
          </React.Suspense>
        </ThemeSelector>
      </ScreenWidthProvider>
    </StateProvider>
  );
};

const ThemeSelector: React.FC<{ site: Site }> = ({ children, site }) => {
  return (
    <React.Suspense fallback={<></>}>
      {site === 'makeup' && <MakeupTheme />}
      {site === 'event' && <EventTheme />}
      {site === 'design' && <DesignTheme />}
      {children}
    </React.Suspense>
  );
};
