import React from 'react';

import { Promo20210302 } from './2021/03/02/';

type Props = {
  date: Date;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  return <Promo20210302 date={date} currencyCode={currencyCode} />;
};
