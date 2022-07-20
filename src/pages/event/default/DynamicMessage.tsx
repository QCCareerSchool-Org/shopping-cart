import React, { ReactElement } from 'react';
import { FreeSpecialtyDynamicMessage } from '../FreeSpecialtyDynamicMessage';

type Props = {
  date: Date;
};

export const DynamicMessage = ({ date }: Props): ReactElement | null => {
  // const time = date.getTime();
  return <FreeSpecialtyDynamicMessage />;
};
