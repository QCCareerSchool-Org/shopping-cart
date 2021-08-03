/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210803 } from './2021/08/03';

type Props = {
  date: Date;
};

export const DefaultPromo: React.FC<Props> = ({ date }) => {
  return <Promo20210803 date={date} />;
};
