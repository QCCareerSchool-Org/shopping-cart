import React, { Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const PetFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.PetFallback })));
const Pet20230807 = React.lazy(async () => import('./2023/08/07').then(m => ({ default: m.Pet20230807 })));

export const PetDefault: React.FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 7, 7, 13, 30) && time < Date.UTC(2023, 7, 17, 4)) { // 2023-08-07T09:30 (13:30 UTC) to 2023-08-17T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Pet20230807 /></Suspense>;
  }

  return <Suspense fallback={null}><PetFallback /></Suspense>;
};
