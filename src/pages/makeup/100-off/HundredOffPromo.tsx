/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

type Props = {
  currencyCode: string;
};

export const HundredOffPromo: React.FC<Props> = ({ currencyCode }) => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 500;

  const desktopImage = currencyCode === 'GBP' ? require('./desktop-gb.jpg').default : require('./desktop.jpg').default;
  const mobileImage = currencyCode === 'GBP' ? require('./mobile-gb.jpg').default : require('./mobile.jpg').default;

  return (
    <section id="promoSection">
      <div className="container px-0">
        <div className="text-center">
          <img src={desktop ? desktopImage : mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
