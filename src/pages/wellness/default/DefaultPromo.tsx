/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210707 } from './2021/07/07';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  return <Promo20210707 date={date} currencyCode={currencyCode} />;
};
