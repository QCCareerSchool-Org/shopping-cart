import React, { ReactElement } from 'react';

import { Promo20220113 } from './2022/01/13';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20220113 date={date} />;
};
