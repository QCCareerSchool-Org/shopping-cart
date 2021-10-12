import React, { ReactElement } from 'react';

import { Promo20211001 } from './2021/10/01';
import { Promo20211012 } from './2021/10/12';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 9, 16, 4)) { // October 16 at 00:00 (04:00 UTC)
    return <Promo20211001 date={date} />;
  } else if (time >= Date.UTC(2021, 9, 12, 13, 30)) { // October 12 at 09:30 (13:30 UTC)
    return <Promo20211012 date={date} />;
  }
  return <Promo20211001 date={date} />;
};
