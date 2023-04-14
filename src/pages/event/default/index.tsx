import React, { FC, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const EventFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.EventFallback })));
const Event20230322 = React.lazy(async () => import('./2023/03/22').then(m => ({ default: m.Event20230322 })));
const Event20230406 = React.lazy(async () => import('./2023/04/06').then(m => ({ default: m.Event20230406 })));

export const EventDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 2, 22, 13, 30) && time < Date.UTC(2023, 3, 3, 4)) { // 2023-03-22T09:30 (13:30 UTC) to 2023-04-03T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Event20230322 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 3, 6, 13, 30) && time < Date.UTC(2023, 3, 17, 13)) { // 2023-04-06T09:30 (13:30 UTC) to 2023-04-17T09:00 (13:00 UTC)
    return <Suspense fallback={null}><Event20230406 /></Suspense>;
  }

  return <Suspense fallback={null}><EventFallback /></Suspense>;
};
