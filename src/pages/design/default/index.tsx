import React, { lazy, ReactElement, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const DesignFallback = lazy(async () => import('./fallback').then(m => ({ default: m.DesignFallback })));
const Design20230222 = lazy(async () => import('./2023/02/22').then(m => ({ default: m.Design20230222 })));
const Design20230322 = lazy(async () => import('./2023/03/22').then(m => ({ default: m.Design20230322 })));

export const DesignDefault = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 1, 22, 14, 30) && time < Date.UTC(2023, 2, 11, 5)) { // 2023-02-22T09:30 (14:30 UTC) to 2023-03-11T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Design20230222 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 2, 22, 13, 30) && time < Date.UTC(2023, 3, 3, 4)) { // 2023-03-22T09:30 (13:30 UTC) to 2023-04-03T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Design20230322 /></Suspense>;
  }

  return <Suspense fallback={null}><DesignFallback /></Suspense>;
};
