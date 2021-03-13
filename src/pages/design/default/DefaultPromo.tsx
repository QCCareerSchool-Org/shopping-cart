import React from 'react';
import { Promo20210313 } from './2021/03/13/Promo';
import { Promo20210315 } from './2021/03/15/Promo';
import { Promo20210302 } from './2021/03/02/Promo';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) =>
  date >= new Date('2021-03-15T09:00:00-04:00')
    ? <Promo20210315 currencyCode={currencyCode} />
    : date >= new Date('2021-03-13T08:00:00-05:00')
      ? <Promo20210313 />
      : <Promo20210302 currencyCode={currencyCode} />;
