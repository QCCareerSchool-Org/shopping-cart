import { needsPostal, needsProvince } from '@qccareerschool/helper-functions';
import React from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { NoShippingAlert } from '../NoShippingAlert';
import { Address1 } from './Address1';
import { Address2 } from './Address2';
import { City } from './City';
import { CountryCode } from './CountryCode';
import { EmailAddress } from './EmailAddress';
import { FirstName } from './FirstName';
import { LastName } from './LastName';
import { PostalCode } from './PostalCode';
import { ProvinceCode } from './ProvinceCode';
import { TelephoneNumber } from './TelephoneNumber';
import { Title } from './Title';

export const Address: React.FC = () => {
  const { address: { countryCode } } = useStateContext();
  return (
    <section id="address-section">
      <div className="container">
        <h2 className="h1">Shipping Information</h2>
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
            <City />
            {needsPostal(countryCode)
              ? needsProvince(countryCode)
                ? <div className="row"><div className="col"><ProvinceCode /></div><div className="col"><PostalCode /></div></div>
                : <PostalCode />
              : needsProvince(countryCode) && <ProvinceCode />
            }
          </div>
          <div className="col-12 col-lg-8 offset-lg-2">
            <NoShippingAlert />
          </div>
        </div>
      </div>
    </section>
  );
};
