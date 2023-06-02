import React, { FC, lazy, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const DesignFallback = lazy(async () => import('./fallback').then(m => ({ default: m.DesignFallback })));
const Design20230605 = lazy(async () => import('./2023/06/05').then(m => ({ default: m.Design20230605 })));

export const DesignDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 5, 5, 13, 30) && time < Date.UTC(2023, 5, 13, 4)) { // 2023-06-05T09:30 (13:30 UTC) to 2023-06-13T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Design20230605 /></Suspense>;
  }

  return <Suspense fallback={null}><DesignFallback /></Suspense>;
};
