/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210803 } from './2021/08/03';
import { Promo20210814 } from './2021/08/14';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 7, 14, 12, 30)) { // August 14 at 8:30 (12:30 GMT)
    return <Promo20210814 date={date} />;
  }
  return <Promo20210803 date={date} />;
};
