/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210315 } from './2021/03/15/Promo';
import { Promo20210327 } from './2021/03/27/Promo';
import { Promo20210329 } from './2021/03/29/Promo';
import { Promo20210406 } from './2021/04/06/Promo';
import { Promo20210417 } from './2021/04/17/Promo';
import { Promo20210419 } from './2021/04/19/Promo';
import { Promo20210501 } from './2021/05/01/Promo';
import { Promo20210503 } from './2021/05/03/Promo';
import { Promo20210505 } from './2021/05/05';
import { Promo20210515 } from './2021/05/15';
import { Promo20210517 } from './2021/05/17';
import { Promo20210529 } from './2021/05/29';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date.getTime() >= Date.UTC(2021, 4, 29, 12)) { // May 29 at 08:00
    return <Promo20210529 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 4, 17, 13)) { // May 17 at 09:00
    return <Promo20210517 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 4, 15, 12)) { // May 15 at 08:00
    return <Promo20210515 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 4, 10, 4)) { // May 10 at 00:00
    return <Promo20210503 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 4, 5, 4)) { // May 5 at 00:00
    return <Promo20210505 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 4, 3, 13)) {
    return <Promo20210503 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 4, 1, 12)) {
    return <Promo20210501 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 3, 19, 13)) {
    return <Promo20210419 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 3, 17, 12)) {
    return <Promo20210417 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 3, 6, 13)) {
    return <Promo20210406 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 2, 29, 13)) {
    return <Promo20210329 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 2, 27, 12)) {
    return <Promo20210327 date={date} />;
  }
  return <Promo20210315 date={date} currencyCode={currencyCode} />;
};
