import React, { FC, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const EventFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.EventFallback })));
const Event20231023 = React.lazy(async () => import('./2023/10/23').then(m => ({ default: m.Event20231023 })));

export const EventDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 9, 23, 13, 30) && time < Date.UTC(2023, 10, 1, 4)) { // 2023-10-23T09:30 (13:30 UTC) to 2023-1-01T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Event20231023 /></Suspense>;
  }

  return <Suspense fallback={null}><EventFallback /></Suspense>;
};
