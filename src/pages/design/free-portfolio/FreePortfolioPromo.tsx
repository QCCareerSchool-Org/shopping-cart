import React from 'react';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

export const FreePortfolioPromo: React.FC = () => {
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 480;

  return (
    <section id="promoSection" style={{ backgroundColor: '#6f6b6a', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={desktop ? require('./desktop.jpg').default : require('./mobile.jpg').default} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
