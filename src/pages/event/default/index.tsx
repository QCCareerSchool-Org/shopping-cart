import React, { FC, Suspense } from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { dateOverride } from '../../../lib/dateOverride';

const EventFallback = React.lazy(async () => import('./fallback').then(m => ({ default: m.EventFallback })));
const Event20231116 = React.lazy(async () => import('./2023/11/16').then(m => ({ default: m.Event20231116 })));
const Event20231127 = React.lazy(async () => import('./2023/11/27').then(m => ({ default: m.Event20231127 })));

export const EventDefault: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const time = date.getTime();

  return (
    <Suspense fallback={null}>
      {time >= Date.UTC(2023, 10, 16, 14, 30) && time < Date.UTC(2023, 10, 27, 5) // 2023-11-16T09:30 (14:30 UTC) to 2023-11-27T00:00 (05:00 UTC)
        ? <Event20231116 />
        : time >= Date.UTC(2023, 10, 27, 5) && time < Date.UTC(2023, 11, 1, 5) // 2023-11-27T00:00 (05:00 UTC) to 2023-12-01T00:00 (05:00 UTC)
          ? <Event20231127 />
          : <EventFallback />
      }
    </Suspense>
  );
};
