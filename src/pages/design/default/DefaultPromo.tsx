import React, { ReactElement } from 'react';

import { Promo20211101 } from './2021/11/01';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  const time = date.getTime();
  return <Promo20211101 date={date} />;
};
