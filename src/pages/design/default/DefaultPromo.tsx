/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210816 } from './2021/08/16';
import { Promo20210828 } from './2021/08/28';
import { Promo20210830 } from './2021/08/30';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 7, 30, 13, 30)) { // August 30 at 09:30 (13:30 UTC)
    return <Promo20210830 date={date} />;
  } else if (time >= Date.UTC(2021, 7, 28, 12)) { // August 28 at 08:00 (12:00 UTC)
    return <Promo20210828 date={date} />;
  }
  return <Promo20210816 date={date} />;
};
