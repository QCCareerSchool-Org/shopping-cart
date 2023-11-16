import React, { FC, lazy, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const MakeupFallback = lazy(async () => import('./fallback').then(m => ({ default: m.MakeupFallback })));
const Makeup20231116 = lazy(async () => import('./2023/11/16').then(m => ({ default: m.Makeup20231116 })));
const Makeup20231127 = lazy(async () => import('./2023/11/27').then(m => ({ default: m.Makeup20231127 })));

export const MakeupDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  return (
    <Suspense fallback={null}>
      {time >= Date.UTC(2023, 10, 16, 14, 30) && time < Date.UTC(2023, 10, 27, 5) // 2023-11-16T09:30 (14:30 UTC) to 2023-11-27T00:00 (05:00 UTC)
        ? <Makeup20231116 />
        : time >= Date.UTC(2023, 10, 27, 5) && time < Date.UTC(2023, 11, 1, 5) // 2023-11-27T00:00 (05:00 UTC) to 2023-12-01T00:00 (05:00 UTC)
          ? <Makeup20231127 />
          : <MakeupFallback />
      }
    </Suspense>
  );
};
