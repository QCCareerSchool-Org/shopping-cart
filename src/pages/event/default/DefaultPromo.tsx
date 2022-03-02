import React, { ReactElement } from 'react';

import { Promo20220301 } from './2022/03/01';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20220301 date={date} />;
};
