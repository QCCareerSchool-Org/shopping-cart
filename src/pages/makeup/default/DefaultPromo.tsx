import React from 'react';

import { Promo20210315 } from './2021/03/15/Promo';
import { Promo20210327 } from './2021/03/27/Promo';
import { Promo20210329 } from './2021/03/29/Promo';
import { Promo20210406 } from './2021/04/06/Promo';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date.getTime() >= Date.UTC(2021, 3, 6, 13)) {
    return <Promo20210406 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 2, 29, 13)) {
    return <Promo20210329 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 2, 27, 12)) {
    return <Promo20210327 date={date} />;
  } else {
    return <Promo20210315 date={date} currencyCode={currencyCode} />;
  }
};
