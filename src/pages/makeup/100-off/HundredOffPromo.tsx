/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { FC } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const HundredOffPromo: FC = () => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 500;

  const desktopImage = price?.currency.code === 'GBP' ? require('./desktop-gb.jpg') : require('./desktop.jpg');
  const mobileImage = price?.currency.code === 'GBP' ? require('./mobile-gb.jpg') : require('./mobile.jpg');

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
