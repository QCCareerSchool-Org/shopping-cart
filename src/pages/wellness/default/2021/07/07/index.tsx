/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210707: React.FC<Props> = ({ date, currencyCode }) => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 371;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date(2021, 6, 15, 12)) { // July 15 at 12:00
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default;
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 960;
    height = 469;
  } else {
    width = 532;
    height = 452;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#aebcd2', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
