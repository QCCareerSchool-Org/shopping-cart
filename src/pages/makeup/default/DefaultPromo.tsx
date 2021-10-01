/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210920 } from './2021/09/20';
import { Promo20211001 } from './2021/10/1';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 9, 1, 13, 30)) { // October 1 at 09:30 (13:30 UTC)
    return <Promo20211001 date={date} />;
  }
  return <Promo20210920 date={date} />;
};
