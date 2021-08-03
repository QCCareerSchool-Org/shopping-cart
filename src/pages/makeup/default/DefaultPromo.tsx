/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210731 } from './2021/07/31';
import { Promo20210803 } from './2021/08/03';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 7, 3, 16, 15)) { // August 3 at 12:15 (16:15 GMT)
    return <Promo20210803 date={date} />;
  }
  return <Promo20210731 date={date} />;
};
