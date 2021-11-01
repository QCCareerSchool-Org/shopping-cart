/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20211101 } from './2021/11/01';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  return <Promo20211101 date={date} />;
};
