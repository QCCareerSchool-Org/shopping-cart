import React, { ReactElement } from 'react';

import { Promo20220404 } from './2022/04/04';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20220404 />;
};
