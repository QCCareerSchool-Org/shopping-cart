/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210419 } from './2021/04/19';
import { Promo20210503 } from './2021/05/03';
import { Promo20210517 } from './2021/05/17';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date.getTime() >= Date.UTC(2021, 4, 17, 13)) { // May 17 at 09:00
    return <Promo20210517 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 4, 3, 13)) { // May 3 at 09:00
    return <Promo20210503 date={date} currencyCode={currencyCode} />;
  }
  return <Promo20210419 date={date} currencyCode={currencyCode} />;
};
