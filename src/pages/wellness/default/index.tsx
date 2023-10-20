import React, { lazy, ReactElement, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const WellnessFallback = lazy(async () => import('./fallback').then(m => ({ default: m.WellnessFallback })));
const Wellness20231023 = lazy(async () => import('./2023/10/23').then(m => ({ default: m.Wellness20231023 })));

export const WellnessDefault = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 9, 23, 13, 30) && time < Date.UTC(2023, 10, 1, 4)) { // 2023-10-23T09:30 (13:30 UTC) to 2023-1-01T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Wellness20231023 /></Suspense>;
  }

  return <Suspense fallback={null}><WellnessFallback /></Suspense>;
};
