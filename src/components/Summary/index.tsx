import React from 'react';

import { usePopup } from '../../hooks/usePopup';
import { useStateContext } from '../../hooks/useStateContext';
import { PaymentModal, PaysafeCompany } from './PaymentModal';

type Props = {
  addToDatabase: () => Promise<boolean>;
  charge: (token: string, company: PaysafeCompany) => Promise<void>;
  guarantee: () => JSX.Element;
}

const getCompany = (currencyCode: string): PaysafeCompany => {
  if ([ 'GBP', 'AUD', 'NZD' ].includes(currencyCode)) {
    return 'GB';
  }
  if (currencyCode === 'USD') {
    return 'US';
  }
  if (currencyCode === 'CAD') {
    return 'CA';
  }
  throw Error('unknown currency');
};

export const Summary: React.FC<Props> = ({ addToDatabase, charge, guarantee }) => {
  const { price } = useStateContext();
  const [ popupCA, toggleCA ] = usePopup(false);
  const [ popupUS, toggleUS ] = usePopup(false);
  const [ popupGB, toggleGB ] = usePopup(false);

  const showPaymentForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (price) {
      addToDatabase().then(result => {
        if (result) {
          const company = getCompany(price.currency.code);
          if (company === 'CA') {
            toggleCA();
          } else if (company === 'US') {
            toggleUS();
          } else if (company === 'GB') {
            toggleGB();
          }
        }
      });
    }
  };

  return (
    <section>
      <div className="container">
        <h2 className="h1">Complete Your Enrollment</h2>
        <button onClick={showPaymentForm} className="btn btn-primary">Proceed to Payment</button>
        {guarantee()}
        <PaymentModal company="CA" isOpen={popupCA} toggle={toggleCA} charge={charge} />
        <PaymentModal company="US" isOpen={popupUS} toggle={toggleUS} charge={charge} />
        <PaymentModal company="GB" isOpen={popupGB} toggle={toggleGB} charge={charge} />
      </div>
    </section>
  );
};
