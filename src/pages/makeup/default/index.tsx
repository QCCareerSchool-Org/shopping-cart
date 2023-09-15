import React, { FC, lazy, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const MakeupFallback = lazy(async () => import('./fallback').then(m => ({ default: m.MakeupFallback })));
const Makeup20230918 = lazy(async () => import('./2023/09/18').then(m => ({ default: m.Makeup20230918 })));

export const MakeupDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 8, 18, 13, 30) && time < Date.UTC(2023, 8, 30, 4)) { // 2023-09-18T09:30 (13:30 UTC) to 2023-09-30T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Makeup20230918 /></Suspense>;
  }

  return <Suspense fallback={null}><MakeupFallback /></Suspense>;
};
