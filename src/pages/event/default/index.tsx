import React, { FC, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const EventFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.EventFallback })));
const Event20230619 = React.lazy(async () => import('./2023/06/19').then(m => ({ default: m.Event20230619 })));
const Event20230705 = React.lazy(async () => import('./2023/07/05').then(m => ({ default: m.Event20230705 })));

export const EventDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 5, 19, 13, 30) && time < Date.UTC(2023, 6, 1, 4)) { // 2023-06-19T09:30 (13:30 UTC) to 2023-07-01T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Event20230619 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 6, 3, 13, 30) && time < Date.UTC(2023, 6, 15, 4)) { // 2023-07-03T09:30 (13:30 UTC) to 2023-07-15T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Event20230705 /></Suspense>;
  }

  return <Suspense fallback={null}><EventFallback /></Suspense>;
};
