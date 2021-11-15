/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { Promo20211101 } from './2021/11/01';
import { Promo20211115 } from './2021/11/15';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 10, 15, 14)) {
    return <Promo20211115 date={date} />;
  }
  return <Promo20211101 date={date} />;
};
