/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210529 } from './2021/05/29';
import { Promo20210601 } from './2021/06/01';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date.getTime() >= Date.UTC(2021, 5, 1, 13)) { // June 1 at 09:00
    return <Promo20210601 date={date} currencyCode={currencyCode} />;
  }
  return <Promo20210529 date={date} currencyCode={currencyCode} />;
};
