import React, { ReactElement } from 'react';

import { Promo20220615 } from './2022/06/15';

type Props = {
  date: Date;
};

export const DefaultPromo = ({ date }: Props): ReactElement => {
  // const time = date.getTime();
  return <Promo20220615 />;
};
