import React, { FC } from 'react';

import { useScreenWidthContext } from '../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../hooks/useStateContext';

const backgroundColor = '#57c3d7';

export const PetFallbackPromo: FC = () => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();

  const desktop = screenWidth > 518;

  let width: number;
  let height: number;

  const image = desktop
    ? price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');

  if (desktop) {
    width = 960;
    height = 400;
  } else {
    width = 518;
    height = 566;
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
