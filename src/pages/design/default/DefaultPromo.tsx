/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210717 } from './2021/07/17';
import { Promo20210719 } from './2021/07/19';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 6, 19, 13, 30)) { // July 19 at 09:30
    return <Promo20210719 date={date} />;
  }
  return <Promo20210717 date={date} currencyCode={currencyCode} />;
};
