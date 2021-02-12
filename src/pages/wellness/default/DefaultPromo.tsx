import React from 'react';

import { useDate } from '../../../hooks/useDateContext';

import { dateOverride } from '../../../lib/dateOverride';

import desktop from './desktop.jpg';
import mobile from './mobile.jpg';
import desktopEnds from './desktop-ends.jpg';
import mobileEnds from './mobile-ends.jpg';

export interface Props {
  countryCode: string;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ countryCode, currencyCode }) => {
  const serverDate = useDate();

  const date = dateOverride() ?? serverDate;

  let desktopImage;
  let mobileImage;
  if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    desktopImage = desktopEnds;
    mobileImage = mobileEnds;
  } else if (date >= new Date('2021-02-16T08:00:00-05:00')) {
    desktopImage = desktop;
    mobileImage = mobile;
  } else if (date >= new Date('2021-02-10T12:00:00-05:00')) {
    desktopImage = desktopEnds;
    mobileImage = mobileEnds;
  } else {
    desktopImage = desktop;
    mobileImage = mobile;
  }
  const backgroundColor = '#5cb4ae';

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container">
        <div className="d-none d-sm-block text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={desktopImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
        <div className="row d-block d-sm-none text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
    </section>
  );
};
