import React from 'react';

import { useDate } from '../../../hooks/useDateContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../lib/dateOverride';

type Props = {
  countryCode: string;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ countryCode, currencyCode }) => {
  const serverDate = useDate();
  const screenWidth = useScreenWidthContext();

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 371;

  let image;
  if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    image = desktop ? require('./desktop-ends.jpg') : require('./mobile-ends.jpg');
  } else {
    image = desktop ? require('./desktop.jpg') : require('./mobile.jpg');
  }

  let width: number;
  let height: number;
  if (desktop) {
    width = 960;
    height = 469;
  } else {
    width = 532;
    height = 371;
  }

  const backgroundColor = '#5cb4ae';

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
    </section>
  );
};
