import React, { ReactElement } from 'react';

import { Promo20220622 } from './2022/06/22';
import { Promo20220824 } from './2022/08/24';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  if (time >= Date.UTC(2022, 8, 12, 13, 30)) { // September 12 at 09:30 (13:30 UTC)
    return <Promo20220622 />;
  }
  if (time >= Date.UTC(2022, 7, 24, 13, 30)) { // August 24 at 09:30 (13:30 UTC)
    return <Promo20220824 date={date} />;
  }
  return <Promo20220622 />;
};
