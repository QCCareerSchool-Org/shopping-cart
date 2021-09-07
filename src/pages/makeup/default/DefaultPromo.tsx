/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210830 } from './2021/08/30';
import { Promo20210907 } from './2021/09/07';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 8, 7, 13, 30)) { // September 7 at 09:30 (13:30 UTC)
    return <Promo20210907 date={date} />;
  }
  return <Promo20210830 date={date} />;
};
