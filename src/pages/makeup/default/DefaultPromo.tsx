/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210628 } from './2021/06/28';
import { Promo20210706 } from './2021/07/06';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date >= new Date(2021, 6, 6, 10, 30)) { // July 6 at 10:30
    return <Promo20210706 date={date} currencyCode={currencyCode} />;
  }
  return <Promo20210628 date={date} currencyCode={currencyCode} />;
};
