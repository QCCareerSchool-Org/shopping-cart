/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210706 } from './2021/07/06';
import { Promo20210717 } from './2021/07/17';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 6, 17, 12)) { // July 17 at 08:00
    return <Promo20210717 date={date} currencyCode={currencyCode} />;
  }
  return <Promo20210706 date={date} currencyCode={currencyCode} />;
};
