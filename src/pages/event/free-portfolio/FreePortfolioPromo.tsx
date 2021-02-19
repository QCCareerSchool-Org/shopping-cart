import React from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

import desktopImage from './desktop.jpg';
import mobileImage from './mobile.jpg';

export const FreePortfolioPromo: React.FC = () => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 410;

  return (
    <section id="promoSection" style={{ padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={desktop ? desktopImage : mobileImage} width="976" height="400" className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
