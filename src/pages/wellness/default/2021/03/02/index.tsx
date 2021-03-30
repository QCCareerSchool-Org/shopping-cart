import React from 'react';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
  currencyCode: string;
}

export const Promo20210302: React.FC<Props> = ({ date, currencyCode }) => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 371;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date('2021-03-29T09:00:00-04:00')) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  } else if (date >= new Date('2021-03-24T12:00:00-04:00')) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
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
    <section id="promoSection" style={{ backgroundColor: '#b0b0ad', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
    </section>
  );
};
