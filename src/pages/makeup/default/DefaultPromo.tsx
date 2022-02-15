import React, { ReactElement } from 'react';

import { Promo20220201 } from './2022/02/01';
import { Promo20220215 } from './2022/02/15';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 1, 15, 14, 30)) { // February 1 at 9:30 (14:30 UTC)
    return <Promo20220215 date={date} />;
  }
  return <Promo20220201 date={date} />;
};
