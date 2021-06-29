/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210503 } from './2021/05/03';
import { Promo20210601 } from './2021/06/01';
import { Promo20210628 } from './2021/06/28';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date >= new Date(2021, 5, 28, 9, 30)) { // June 28 at 09:30
    return <Promo20210628 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 5, 1, 13)) { // June 1 at 09:00
    return <Promo20210601 date={date} currencyCode={currencyCode} />;
  }
  return <Promo20210503 date={date} currencyCode={currencyCode} />;
};
