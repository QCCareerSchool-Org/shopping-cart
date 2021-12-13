import React, { ReactElement } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

export const Promo = (): ReactElement => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 576;

  let width: number;
  let height: number;

  const image = desktop
    ? require('./desktop.jpg').default
    : require('./mobile.jpg').default;

  if (desktop) {
    width = 960;
    height = 400;
  } else {
    width = 518;
    height = 566;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#ebedea', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
