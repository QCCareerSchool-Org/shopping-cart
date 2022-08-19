import React, { ReactElement } from 'react';

import { Promo20211220 } from './2021/12/20';
import { Promo20220824 } from './2022/08/24';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 8, 12, 13, 30)) { // September 12 at 09:30 (13:30 UTC)
    return <Promo20211220 date={date} />;
  }
  if (time >= Date.UTC(2022, 7, 24, 13, 30)) { // August 24 at 09:30 (13:30 UTC)
    return <Promo20220824 date={date} />;
  }
  return <Promo20211220 date={date} />;
};
