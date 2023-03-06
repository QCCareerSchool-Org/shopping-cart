import React, { Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const PetFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.PetFallback })));
const Pet20230118 = React.lazy(async () => import('./2023/01/18').then(m => ({ default: m.Pet20230118 })));
const Pet20230208 = React.lazy(async () => import('./2023/02/08').then(m => ({ default: m.Pet20230208 })));
const Pet20230222 = React.lazy(async () => import('./2023/02/22').then(m => ({ default: m.Pet20230222 })));

export const PetDefault: React.FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 0, 16, 14, 30) && time < Date.UTC(2023, 0, 28, 5)) { // 2023-01-16T09:30 (14:30 UTC) to 2023-01-28T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Pet20230118 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 1, 8, 14, 30) && time < Date.UTC(2023, 1, 18, 5)) { // 2023-02-08T09:30 (14:30 UTC) to 2023-02-17T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Pet20230208 /></Suspense>;
  }

  if (time >= Date.UTC(2023, 1, 22, 14, 30) && time < Date.UTC(2023, 2, 11, 5)) { // 2023-02-22T09:30 (14:30 UTC) to 2023-03-11T00:00 (05:00 UTC)
    return <Suspense fallback={null}><Pet20230222 /></Suspense>;
  }

  return <Suspense fallback={null}><PetFallback /></Suspense>;
};
