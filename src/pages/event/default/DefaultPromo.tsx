import React from 'react';

import { Promo20210907 } from './2021/09/07';
import { Promo20210918 } from './2021/09/18';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  const time = date.getTime();
  if (time >= Date.UTC(2021, 8, 18, 12)) { // September 18 at 08:00 (12:00 UTC)
    return <Promo20210918 date={date} />;
  }
  return <Promo20210907 date={date} />;
};
