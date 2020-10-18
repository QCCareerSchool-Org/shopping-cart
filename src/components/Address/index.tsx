import React from 'react';

import { Title } from './Title';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { CountryCode } from './CountryCode';
import { ProvinceCode } from './ProvinceCode';
import { Address1 } from './Address1';
import { Address2 } from './Address2';
import { EmailAddress } from './EmailAddress';
import { TelephoneNumber } from './TelephoneNumber';
import { useStateContext } from '../../hooks/useStateContext';
import { PostalCode } from './PostalCode';

const needsPostalCode = (countryCode: string) => true;

export const Address: React.FC = () => {
  const { address: { countryCode } } = useStateContext();
  return (
    <section>
      <div className="container">
        <h2>Shipping Information</h2>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 offset-lg-2">
            <Title />
            <FirstName />
            <LastName />
            <EmailAddress />
            <TelephoneNumber />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <CountryCode />
            <Address1 />
            <Address2 />
            <ProvinceCode />
            {needsPostalCode(countryCode) && <PostalCode />}
          </div>
        </div>
      </div>
    </section>
  );
};
