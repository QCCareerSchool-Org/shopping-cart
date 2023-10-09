import React, { Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const PetFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.PetFallback })));
const Pet20231009 = React.lazy(async () => import('./2023/10/09').then(m => ({ default: m.Pet20231009 })));

export const PetDefault: React.FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  if (time >= Date.UTC(2023, 9, 9, 13, 30) && time < Date.UTC(2023, 9, 16, 4)) { // 2023-10-09T09:30 (13:30 UTC) to 2023-10-16T00:00 (04:00 UTC)
    return <Suspense fallback={null}><Pet20231009 /></Suspense>;
  }

  return <Suspense fallback={null}><PetFallback /></Suspense>;
};
