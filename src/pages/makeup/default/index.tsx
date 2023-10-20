import React, { FC, lazy, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const MakeupFallback = lazy(async () => import('./fallback').then(m => ({ default: m.MakeupFallback })));
const Makeup20231023 = lazy(async () => import('./2023/10/23').then(m => ({ default: m.Makeup20231023 })));

export const MakeupDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 9, 23, 13, 30) && time < Date.UTC(2023, 10, 1, 4)) { // 2023-10-23T09:30 (13:30 UTC) to 2023-1-01T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Makeup20231023 /></Suspense>;
  }

  return <Suspense fallback={null}><MakeupFallback /></Suspense>;
};
