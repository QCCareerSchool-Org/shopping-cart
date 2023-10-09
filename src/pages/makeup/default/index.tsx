import React, { FC, lazy, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const MakeupFallback = lazy(async () => import('./fallback').then(m => ({ default: m.MakeupFallback })));
const Makeup20231009 = lazy(async () => import('./2023/10/09').then(m => ({ default: m.Makeup20231009 })));

export const MakeupDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 9, 9, 13, 30) && time < Date.UTC(2023, 9, 16, 4)) { // 2023-10-09T09:30 (13:30 UTC) to 2023-10-16T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Makeup20231009 /></Suspense>;
  }

  return <Suspense fallback={null}><MakeupFallback /></Suspense>;
};
