/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210814 } from './2021/08/14';
import { Promo20210816 } from './2021/08/16';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 7, 16, 13, 30)) { // August 16 at 9:30 (13:30 GMT)
    return <Promo20210816 date={date} />;
  }
  return <Promo20210814 date={date} />;
};
