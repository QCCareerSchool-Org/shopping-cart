import React, { ReactElement } from 'react';

import { BogoDynamicMessage } from '../BogoDynamicMessage';

type Props = {
  date: Date;
};

export const DynamicMessage = ({ date }: Props): ReactElement | null => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 8, 12, 13, 30)) { // September 12 at 09:30 (13:30 UTC)
    return null;
  }
  if (time >= Date.UTC(2022, 7, 24, 13, 30)) { // August 24 at 09:30 (13:30 UTC)
    return <BogoDynamicMessage />;
  }
  return null;
};
