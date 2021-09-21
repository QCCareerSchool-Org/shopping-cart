import React from 'react';

import { Promo20210920 } from './2021/09/20';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  // const time = date.getTime();
  return <Promo20210920 date={date} />;
};
