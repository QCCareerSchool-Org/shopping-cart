import React from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

type Props = {
  currencyCode: string;
};

export const TuitionDiscountPromo: React.FC<Props> = ({ currencyCode }) => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 480;

  const desktopImage = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
  const mobileImage = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');

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
