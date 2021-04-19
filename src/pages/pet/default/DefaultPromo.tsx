import React from 'react';

import { Promo20210302 } from './2021/03/02';
import { Promo20210329 } from './2021/03/29';
import { Promo20210406 } from './2021/04/06';
import { Promo20210419 } from './2021/04/19';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date.getTime() >= Date.UTC(2021, 3, 19, 13)) {
    return <Promo20210419 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 3, 6, 13)) {
    return <Promo20210406 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 2, 29, 13)) {
    return <Promo20210329 date={date} currencyCode={currencyCode} />;
  } else {
    return <Promo20210302 date={date} currencyCode={currencyCode} />;
  }
};
