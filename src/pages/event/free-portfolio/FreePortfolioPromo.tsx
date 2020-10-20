import React from 'react';

import desktop from './desktop.jpg';
import mobile from './mobile.jpg';

export const FreePortfolioPromo: React.FC = () => {
  return (
    <section id="promoSection" style={{ padding: 0 }}>
      <div className="container">
        <div className="d-none d-lg-block text-center">
          <img src={desktop} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
        <div className="d-block d-lg-none text-center">
          <img src={mobile} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
