import React, { ReactElement } from 'react';

import { FreeSpecialtyDynamicMessage } from '../FreeSpecialtyDynamicMessage';
import { DynamicMessage20220824 } from './2022/08/24/DynamicMessage';

type Props = {
  date: Date;
};

export const DynamicMessage = ({ date }: Props): ReactElement | null => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 8, 12, 13, 30)) { // September 12 at 09:30 (13:30 UTC)
    return <FreeSpecialtyDynamicMessage />;
  }
  if (time >= Date.UTC(2022, 7, 24, 13, 30)) { // August 24 at 09:30 (13:30 UTC)
    return <DynamicMessage20220824 />;
  }
  return <FreeSpecialtyDynamicMessage />;
};
