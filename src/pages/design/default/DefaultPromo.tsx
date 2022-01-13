import React, { ReactElement } from 'react';

import { Promo20220106 } from './2022/01/06';
import { Promo20220113 } from './2022/01/13';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 0, 13, 14, 30)) { // January 13 at 09:30 (13:30 UTC)
    return <Promo20220113 date={date} />;
  }
  return <Promo20220106 date={date} />;
};
