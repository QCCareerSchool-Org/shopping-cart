import React, { ReactElement } from 'react';

import { Promo20220106 } from './2022/01/06';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20220106 date={date} />;
};
