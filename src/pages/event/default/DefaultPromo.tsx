import React, { ReactElement } from 'react';

import { Promo20211201 } from './2021/12/01';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20211201 date={date} />;
};
