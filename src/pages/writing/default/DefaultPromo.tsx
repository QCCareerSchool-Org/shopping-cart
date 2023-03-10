import { audCountry, gbpCountry, nzdCountry } from '@qccareerschool/helper-functions';
import React from 'react';
import type { FC } from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const backgroundColor = '#687b84';

const getImages = (countryCode: string, screenWidth: number): [image: any, width: number, height: number] => {
  const desktop = screenWidth >= 532;

  if (gbpCountry(countryCode)) {
    return desktop
      ? [ require('./desktop-uk-52.jpg'), 960, 469 ]
      : [ require('./mobile-uk-52.jpg'), 532, 440 ];
  }

  if (audCountry(countryCode)) {
    return desktop
      ? [ require('./desktop-100.jpg'), 960, 469 ]
      : [ require('./mobile-100.jpg'), 532, 440 ];
  }

  if (nzdCountry(countryCode)) {
    return desktop
      ? [ require('./desktop-118.jpg'), 960, 469 ]
      : [ require('./mobile-118.jpg'), 532, 440 ];
  }

  if (countryCode === 'CA' || countryCode === 'US') {
    return desktop
      ? [ require('./desktop.jpg'), 960, 469 ]
      : [ require('./mobile.jpg'), 532, 440 ];
  }

  return desktop
    ? [ require('./desktop-116.jpg'), 960, 469 ]
    : [ require('./mobile-116.jpg'), 532, 440 ];
};

export const DefaultPromo: FC = () => {
  const { address: { countryCode } } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const [ image, width, height ] = getImages(countryCode, screenWidth);

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
