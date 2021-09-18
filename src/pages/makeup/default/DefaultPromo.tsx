/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210907 } from './2021/09/07';
import { Promo20210918 } from './2021/09/18';
import { Promo20210920 } from './2021/09/20';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 8, 20, 13, 30)) { // September 20 at 09:30 (13:30 UTC)
    return <Promo20210920 date={date} />;
  } else if (time >= Date.UTC(2021, 8, 18, 12)) { // September 18 at 08:00 (12:00 UTC)
    return <Promo20210918 date={date} />;
  }
  return <Promo20210907 date={date} />;
};
