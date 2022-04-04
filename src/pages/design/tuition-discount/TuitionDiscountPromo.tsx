import React, { ReactElement } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const TuitionDiscountPromo = (): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 480;

  const desktopImage = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
  const mobileImage = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');

  return (
    <section id="promoSection" style={{ backgroundColor: 'black', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={desktop ? desktopImage : mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
