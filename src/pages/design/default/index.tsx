import React, { FC, lazy, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const DesignFallback = lazy(async () => import('./fallback').then(m => ({ default: m.DesignFallback })));
const Design20230522 = lazy(async () => import('./2023/05/22').then(m => ({ default: m.Design20230522 })));

export const DesignDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 4, 22, 13, 30) && time < Date.UTC(2023, 4, 29, 4)) { // 2023-05-22T09:30 (13:30 UTC) to 2023-05-29T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Design20230522 /></Suspense>;
  }

  return <Suspense fallback={null}><DesignFallback /></Suspense>;
};
