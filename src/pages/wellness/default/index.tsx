import React, { lazy, ReactElement, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const WellnessFallback = lazy(async () => import('./fallback').then(m => ({ default: m.WellnessFallback })));
const Wellness20230619 = lazy(async () => import('./2023/06/19').then(m => ({ default: m.Wellness20230619 })));

export const WellnessDefault = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 5, 19, 13, 30) && time < Date.UTC(2023, 6, 1, 4)) { // 2023-06-19T09:30 (13:30 UTC) to 2023-07-01T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Wellness20230619 /></Suspense>;
  }

  return <Suspense fallback={null}><WellnessFallback /></Suspense>;
};
