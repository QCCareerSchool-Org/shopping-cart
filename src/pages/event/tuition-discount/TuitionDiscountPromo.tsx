import React, { ReactElement } from 'react';
import { useStateContext } from '../../../hooks/useStateContext';

import desktopGB from './desktop-gb.jpg';
import desktop from './desktop.jpg';
import mobileGB from './mobile-gb.jpg';
import mobile from './mobile.jpg';

export const TuitionDiscountPromo = (): ReactElement => {
  const { price } = useStateContext();
  const desktopImage = price?.currency.code === 'GBP' ? desktopGB : desktop;
  const mobileImage = price?.currency.code === 'GBP' ? mobileGB : mobile;

  return (
    <section id="promoSection" style={{ padding: 0 }}>
      <div className="container">
        <div className="d-none d-lg-block text-center">
          <img src={desktopImage} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
        <div className="d-block d-lg-none text-center">
          <img src={mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
