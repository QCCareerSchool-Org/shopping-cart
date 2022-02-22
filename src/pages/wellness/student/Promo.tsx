import React, { ReactElement } from 'react';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

export const Promo = (): ReactElement => {
  const screenWidth = useScreenWidthContext();
  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
  } else {
    image = require('./mobile.jpg');
  }

  if (desktop) {
    width = 1060;
    height = 401;
  } else {
    width = 600;
    height = 390;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#c4c4c4', padding: 0 }}>
      <div className="container text-center px-0">
        <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
      </div>
    </section>
  );
};
