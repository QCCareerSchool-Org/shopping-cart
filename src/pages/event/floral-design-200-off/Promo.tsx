/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const backgroundColor = '#000';

export const Floral200Promo = (): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 440;

  const [ image, width, height ] = desktop
    ? [
      price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg'),
      976,
      500,
    ]
    : [
      price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg'),
      440,
      500,
    ];

  return (
    <section id="promoSection" style={{ padding: 0, backgroundColor }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
