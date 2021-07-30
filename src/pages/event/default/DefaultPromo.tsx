import React from 'react';

import { Promo20210719 } from './2021/07/19';
import { Promo20210731 } from './2021/07/31';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 6, 31, 12)) { // July 31 at 08:00
    return <Promo20210731 date={date} />;
  }
  return <Promo20210719 date={date} />;
};
