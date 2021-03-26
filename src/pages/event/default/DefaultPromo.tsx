import React from 'react';

import { Promo20210315 } from './2021/03/15/Promo';
import { Promo20210327 } from './2021/03/27/Promo';
import { Promo20210329 } from './2021/03/29/Promo';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date >= new Date('2021-03-29T09:00:00-04:00')) {
    return <Promo20210329 date={date} currencyCode={currencyCode} />;
  } else if (date >= new Date('2021-03-27T08:00:00-04:00')) {
    return <Promo20210327 date={date} />;
  } else {
    return <Promo20210315 date={date} currencyCode={currencyCode} />;
  }
};
