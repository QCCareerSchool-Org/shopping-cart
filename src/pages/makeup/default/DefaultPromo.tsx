import React from 'react';

import { Promo20210302 } from './2021/03/Promo';
import { Promo20210201 } from './2021/02/Promo';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => date >= new Date('2021-03-02T08:00:00-05:00')
  ? <Promo20210302 date={date} currencyCode={currencyCode} />
  : <Promo20210201 date={date} currencyCode={currencyCode} />;
