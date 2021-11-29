import React, { ReactElement } from 'react';

import { Promo20211115 } from './2021/11/15';
import { Promo20211129 } from './2021/11/29';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 10, 29, 14)) { // November 29 at 09:00 (14:00 UTC)
    return <Promo20211129 date={date} />;
  }
  return <Promo20211115 date={date} />;
};
