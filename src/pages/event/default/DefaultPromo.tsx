import React, { ReactElement } from 'react';

import { Promo20220124 } from './2022/01/24';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20220124 date={date} />;
};
