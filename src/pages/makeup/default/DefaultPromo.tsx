import React from 'react';

import { Promo20210315 } from './2021/03/15/Promo';
import { Promo20210327 } from './2021/03/27/Promo';
import { Promo20210329 } from './2021/03/29/Promo';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  alert(date);
  alert(typeof date);
  alert(new Date('2021-03-29T09:09:00-0400'));
  alert(typeof new Date('2021-03-29T09:09:00-0400'));
  alert(date >= new Date('2021-03-29T09:09:00-0400'));
  alert(date > new Date('2021-03-29T09:09:00-0400'));
  alert(date < new Date('2021-03-29T09:09:00-0400'));
  alert(date <= new Date('2021-03-29T09:09:00-0400'));

  if (date >= new Date('2021-03-29T09:09:00-0400')) {
    return <Promo20210329 date={date} currencyCode={currencyCode} />;
  } else if (date >= new Date('2021-03-27T08:00:00-0400')) {
    return <Promo20210327 date={date} />;
  } else {
    return <Promo20210315 date={date} currencyCode={currencyCode} />;
  }
};
