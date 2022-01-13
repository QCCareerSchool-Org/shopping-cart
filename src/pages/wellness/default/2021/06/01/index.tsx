/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210601: React.FC<Props> = ({ date, currencyCode }) => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 371;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 5, 23, 13)) { // June 23 at 09:00
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 960;
    height = 469;
  } else {
    width = 532;
    height = 374;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#ee7576', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
    </section>
  );
};
