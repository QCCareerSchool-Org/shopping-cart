import React, { ReactElement } from 'react';

import { BogoDynamicMessage } from '../BogoDynamicMessage';

type Props = {
  date: Date;
};

export const DynamicMessage = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <BogoDynamicMessage />;
};
