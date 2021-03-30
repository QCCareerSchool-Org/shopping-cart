import React from 'react';

import { Promo20210302 } from './2021/03/02';
import { Promo20210329 } from './2021/03/29';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date.getTime() >= Date.UTC(2021, 2, 29, 13)) {
    return <Promo20210329 date={date} currencyCode={currencyCode} />;
  } else {
    return <Promo20210302 date={date} currencyCode={currencyCode} />;
  }
};
