import React, { FC, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const EventFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.EventFallback })));
const Event20230505 = React.lazy(async () => import('./2023/05/05').then(m => ({ default: m.Event20230505 })));

export const EventDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 4, 5, 13, 30) && time < Date.UTC(2023, 4, 13, 4)) { // 2023-05-05T09:30 (13:30 UTC) to 2023-05-13T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Event20230505 /></Suspense>;
  }

  return <Suspense fallback={null}><EventFallback /></Suspense>;
};
