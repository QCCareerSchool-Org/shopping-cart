/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const Promo = (): ReactElement => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop-100.jpg');
  } else {
    image = require('./mobile-100.jpg');
  }

  if (desktop) {
    width = 960;
    height = 469;
  } else {
    width = 532;
    height = 440;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#d7d8dc', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
