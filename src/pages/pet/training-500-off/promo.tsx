import React, { ReactElement } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const backgroundColor = 'white';

export const Promo = (): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 576;

  const [ image, width, height ] = desktop
    ? [ price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg'), 960, 400 ]
    : [ price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg'), 518, 566 ];

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
