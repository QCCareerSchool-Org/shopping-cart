import React from 'react';

import { useFormState } from '../../hooks/useFormState';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { CountryCode } from './CountryCode';
import { ProvinceCode } from './ProvinceCode';

export const AddressForm: React.FC = () => {
  const state = useFormState();

  return (
    <section>
      <div className="container">
        <h2>Address</h2>
        <FirstName />
        <LastName />
        <CountryCode />
        <ProvinceCode />
      </div>
    </section>
  );
};
