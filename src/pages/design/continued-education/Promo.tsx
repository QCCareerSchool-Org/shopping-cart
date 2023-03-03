import React, { FC } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

const backgroundColor = '#b3b4b8';

export const ContinuedEducationPromo: FC = () => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 576;
  const [ width, height, src ] = desktop
    ? [ 1060, 401, require('./desktop.jpg') ]
    : [ 600, 390, require('./mobile.jpg') ];

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <img src={src} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
      </div>
    </section>
  );
};
