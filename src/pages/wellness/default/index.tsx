import React, { lazy, ReactElement, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const WellnessFallback = lazy(async () => import('./fallback').then(m => ({ default: m.WellnessFallback })));
const Wellness20230824 = lazy(async () => import('./2023/08/24').then(m => ({ default: m.Wellness20230824 })));

export const WellnessDefault = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 7, 24, 13, 30) && time < Date.UTC(2023, 8, 9, 4)) { // 2023-08-24T09:30 (13:30 UTC) to 2023-09-09T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Wellness20230824 /></Suspense>;
  }

  return <Suspense fallback={null}><WellnessFallback /></Suspense>;
};
