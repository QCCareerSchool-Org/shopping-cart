import React from 'react';

import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { CountryCode } from './CountryCode';
import { ProvinceCode } from './ProvinceCode';

export const Address: React.FC = () => {
  return (
    <section>
      <div className="container">
        <h2>Shipping Information</h2>
        <FirstName />
        <LastName />
        <CountryCode />
        <ProvinceCode />
      </div>
    </section>
  );
};
