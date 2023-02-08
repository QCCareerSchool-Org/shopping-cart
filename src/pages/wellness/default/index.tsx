import React, { lazy, ReactElement, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const WellnessFallback = lazy(async () => import('./fallback').then(m => ({ default: m.WellnessFallback })));
const Wellness20230118 = lazy(async () => import('./2023/01/18').then(m => ({ default: m.Wellness20230118 })));
const Wellness20230208 = lazy(async () => import('./2023/02/08').then(m => ({ default: m.Wellness20230208 })));

export const WellnessDefault = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 0, 16, 14, 30) && time < Date.UTC(2023, 0, 28, 5)) { // 2023-01-16T09:30 (14:30 UTC) to 2023-01-28T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Wellness20230118 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 1, 8, 14, 30) && time < Date.UTC(2023, 1, 18, 5)) { // 2023-02-08T09:30 (14:30 UTC) to 2023-02-17T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Wellness20230208 /></Suspense>;
  }

  return <Suspense fallback={null}><WellnessFallback /></Suspense>;
};
