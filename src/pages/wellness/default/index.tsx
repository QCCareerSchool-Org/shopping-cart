import React, { lazy, ReactElement, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const WellnessFallback = lazy(async () => import('./fallback').then(m => ({ default: m.WellnessFallback })));
const Wellness20231009 = lazy(async () => import('./2023/10/09').then(m => ({ default: m.Wellness20231009 })));

export const WellnessDefault = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 9, 9, 13, 30) && time < Date.UTC(2023, 9, 16, 4)) { // 2023-10-09T09:30 (13:30 UTC) to 2023-10-16T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Wellness20231009 /></Suspense>;
  }

  return <Suspense fallback={null}><WellnessFallback /></Suspense>;
};
