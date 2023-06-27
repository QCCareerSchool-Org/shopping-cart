import { needsPostal, needsProvince } from '@qccareerschool/helper-functions';
import React, { ChangeEventHandler } from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
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

export const BillingAddress: React.FC = () => {
  const { billingAddress } = useStateContext();
  const dispatch = useDispatchContext();

  const handleDisableClick: ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'SET_BILLING_DISABLED', payload: e.target.checked });
  };

  return (
    <>
      <section id="billing-section">
        <div className="container">
          <h2 className="h1">Billing Address</h2>
          <div className="text-center">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="billingSame" checked={billingAddress.sameAsShipping} onChange={handleDisableClick} />
              <label className="custom-control-label" htmlFor="billingSame">Use student address for billing address</label>
            </div>
          </div>
          {!billingAddress.sameAsShipping && (
            <div className="row mt-4">
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
                {needsPostal(billingAddress.countryCode)
                  ? needsProvince(billingAddress.countryCode)
                    ? <div className="row"><div className="col"><ProvinceCode /></div><div className="col"><PostalCode /></div></div>
                    : <PostalCode />
                  : needsProvince(billingAddress.countryCode) && <ProvinceCode />
                }
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
