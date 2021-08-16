/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210803 } from './2021/08/03';
import { Promo20210816 } from './2021/08/16';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  return <Promo20210816 date={date} />;
};
