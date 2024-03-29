import { needsPostal, needsProvince } from '@qccareerschool/helper-functions';
import React from 'react';

import { useStateContext } from '../../hooks/useStateContext';
import { School } from '../../lib/enrollment';
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

type Props = {
  school: School;
};

export const Address: React.FC<Props> = ({ school }) => {
  const { address: { countryCode } } = useStateContext();
  return (
    <section id="address-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            {school === 'QC Design School'
              ? (
                <>
                  <h2 className="h1 mb-3">Student Address</h2>
                  <p className="lead text-center mb-4">Course materials will be shipped to this address.</p>
                </>
              )
              : <h2 className="h1">Student Address</h2>
            }
          </div>
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
