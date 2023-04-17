import React, { FC, lazy, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const MakeupFallback = lazy(async () => import('./fallback').then(m => ({ default: m.MakeupFallback })));
const Makeup20230322 = lazy(async () => import('./2023/03/22').then(m => ({ default: m.Makeup20230322 })));
const Makeup20230406 = lazy(async () => import('./2023/04/06').then(m => ({ default: m.Makeup20230406 })));

export const MakeupDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 2, 22, 13, 30) && time < Date.UTC(2023, 3, 3, 4)) { // 2023-03-22T09:30 (13:30 UTC) to 2023-04-03T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Makeup20230322 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 3, 6, 13, 30) && time < Date.UTC(2023, 3, 17, 19)) { // 2023-04-06T09:30 (13:30 UTC) to 2023-04-17T15:00 (19:00 UTC)
    return <Suspense fallback={null}><Makeup20230406 /></Suspense>;
  }

  return <Suspense fallback={null}><MakeupFallback /></Suspense>;
};
