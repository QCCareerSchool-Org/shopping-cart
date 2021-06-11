/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210529 } from './2021/05/29/Promo';
import { Promo20210601 } from './2021/06/01';
import { Promo20210612 } from './2021/06/12';
import { Promo20210614 } from './2021/06/14';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date.getTime() >= Date.UTC(2021, 5, 14, 13)) { // June 14 at 09:00
    return <Promo20210614 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 5, 12, 12)) { // June 12 at 08:00
    return <Promo20210612 date={date} currencyCode={currencyCode} />;
  }
  return <Promo20210601 date={date} currencyCode={currencyCode} />;
};
