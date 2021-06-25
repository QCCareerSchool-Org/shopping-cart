/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { Promo20210601 } from './2021/06/01';
import { Promo20210612 } from './2021/06/12';
import { Promo20210614 } from './2021/06/14';
import { Promo20210618 } from './2021/06/18';
import { Promo20210626 } from './2021/06/26';
import { Promo20210628 } from './2021/06/28';

type Props = {
  date: Date;
  currencyCode: string;
};

export const DefaultPromo: React.FC<Props> = ({ date, currencyCode }) => {
  if (date >= new Date(2021, 5, 28, 9, 30)) { // June 28 at 09:30
    return <Promo20210628 date={date} currencyCode={currencyCode} />;
  } else if (date >= new Date(2021, 5, 26, 8)) { // June 26 at 08:00
    return <Promo20210626 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 5, 21, 4)) { // June 21 at 00:00
    return <Promo20210614 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 5, 18, 13, 30)) { // June 18 at 09:30
    return <Promo20210618 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 5, 14, 13)) { // June 14 at 09:00
    return <Promo20210614 date={date} currencyCode={currencyCode} />;
  } else if (date.getTime() >= Date.UTC(2021, 5, 12, 12)) { // June 12 at 08:00
    return <Promo20210612 date={date} currencyCode={currencyCode} />;
  }
  return <Promo20210601 date={date} currencyCode={currencyCode} />;
};
