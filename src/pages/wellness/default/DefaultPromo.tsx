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

  let image: string;
  let width: number;
  let height: number;
  let backgroundColor: string;

  if (date >= new Date('2021-03-10T12:00:00-05:00')) {
    backgroundColor = '#b0b0ad';
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./2021/03/desktop-uk-ends.jpg') : require('./2021/03/desktop-ends.jpg');
      width = 960;
      height = 469;
    } else {
      image = currencyCode === 'GBP' ? require('./2021/03/mobile-uk-ends.jpg') : require('./2021/03/mobile-ends.jpg');
      width = 532;
      height = 374;
    }
  } else if (date >= new Date('2021-03-02T08:00:00-05:00')) {
    backgroundColor = '#b0b0ad';
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./2021/03/desktop-uk.jpg') : require('./2021/03/desktop.jpg');
      width = 960;
      height = 469;
    } else {
      image = currencyCode === 'GBP' ? require('./2021/03/mobile-uk.jpg') : require('./2021/03/mobile.jpg');
      width = 532;
      height = 374;
    }
  } else if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    backgroundColor = '#5cb4ae';
    if (desktop) {
      image = require('./2021/02/desktop-ends.jpg');
      width = 960;
      height = 469;
    } else {
      image = require('./2021/02/mobile-ends.jpg');
      width = 532;
      height = 371;
    }
  } else {
    backgroundColor = '#5cb4ae';
    if (desktop) {
      image = require('./2021/02/desktop.jpg');
      width = 960;
      height = 469;
    } else {
      image = require('./2021/02/mobile.jpg');
      width = 532;
      height = 371;
    }
  }

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
