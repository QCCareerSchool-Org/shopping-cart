import React, { lazy, ReactElement, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const WellnessFallback = lazy(async () => import('./fallback').then(m => ({ default: m.WellnessFallback })));
const Wellness20221013 = lazy(async () => import('./2022/10/13').then(m => ({ default: m.Wellness20221013 })));
const Wellness20221103 = lazy(async () => import('./2022/11/03').then(m => ({ default: m.Wellness20221103 })));
const Wellness20221123 = lazy(async () => import('./2022/11/23').then(m => ({ default: m.Wellness20221123 })));
const Wellness20221212 = lazy(async () => import('./2022/12/12').then(m => ({ default: m.Wellness20221212 })));
const Wellness20221226 = lazy(async () => import('./2022/12/26').then(m => ({ default: m.Wellness20221226 })));
const Wellness20230118 = lazy(async () => import('./2023/01/18').then(m => ({ default: m.Wellness20230118 })));

export const WellnessDefault = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2022, 9, 13, 13, 30) && time < Date.UTC(2022, 9, 22, 4)) { // 2022-10-13T09:30 (13:30 UTC) to 2022-10-22T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Wellness20221013 /></Suspense>;
  }

  // UTC offset moves from -0400 to -0500 in this period (DST ends 2022-11-06T02:00 EDT)
  if (time >= Date.UTC(2022, 10, 3, 13, 30) && time < Date.UTC(2022, 10, 12, 5)) { // 2022-11-03T09:30 (13:30 UTC) to 2022-11-12T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Wellness20221103 /></Suspense>;
  }

  if (time >= Date.UTC(2022, 10, 21, 14, 30) && time < Date.UTC(2022, 11, 3, 5)) { // 2022-11-23T09:30 (14:30 UTC) to 2022-12-03T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Wellness20221123 /></Suspense>;
  }

  if (time >= Date.UTC(2022, 11, 12, 14, 30) && time < Date.UTC(2022, 11, 17, 5)) { // 2022-12-12T09:30 (14:30 UTC) to 2022-12-17T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Wellness20221212 /></Suspense>;
  }

  if (time >= Date.UTC(2022, 11, 26, 14, 30) && time < Date.UTC(2023, 0, 7, 5)) { // 2022-12-26T09:30 (14:30 UTC) to 2023-01-07T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Wellness20221226 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 0, 18, 14, 30) && time < Date.UTC(2023, 0, 28, 5)) { // 2023-01-18T09:30 (14:30 UTC) to 2023-01-28T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Wellness20230118 /></Suspense>;
  }

  return <Suspense fallback={null}><WellnessFallback /></Suspense>;
};
