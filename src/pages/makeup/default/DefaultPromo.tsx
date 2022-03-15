import React, { ReactElement } from 'react';

import { Promo20220315 } from './2022/03/15';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20220315 date={date} />;
};
