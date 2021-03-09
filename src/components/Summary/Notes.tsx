import React from 'react';

import { usePopup } from '../../hooks/usePopup';
import { useStateContext } from '../../hooks/useStateContext';
import { formatCurrency } from '../../lib/formatCurrency';
import { ordinal } from '../../lib/ordinal';
import { PriceResult } from '../../state/price';

type Props = {
  agreementLink: string;
  agreementLinkGB: string;
}

export const Notes: React.FC<Props> = ({ agreementLink, agreementLinkGB }) => {
  const { price, payment } = useStateContext();
  const [ popup, toggle ] = usePopup(false);

  if (!price) {
    return null;
  }

  return (
    <>
      {price.courses.length > 0 && (
        <>
          {payment.plan === 'full' && <FullPaymentSummary price={price} />}
          {payment.plan === 'part' && <PartPaymentSummary price={price} day={payment.day} />}
          <p>All prices are in {price.currency.name}.</p>
        </>
      )}
    </>
  );
};

const FullPaymentSummary: React.FC<{ price: PriceResult }> = ({ price }) => (
  <p>
    I agree to pay <strong>{price.currency.symbol}{formatCurrency(price.plans.full.total)}</strong>{price.plans.full.discount > 0
      ? <span>&mdash;a savings of <strong>{price.currency.symbol}{formatCurrency(price.plans.full.discount)}!</strong></span>
      : <>.</>
    }
  </p>
);

const PartPaymentSummary: React.FC<{ price: PriceResult; day: number }> = ({ price, day }) => (
  <>
    <p>
      I agree to pay a deposit of <strong>{price.currency.symbol}{formatCurrency(price.plans.part.deposit)}</strong> now
        and <u>{price.plans.part.installments} monthly installments</u> of <strong>{price.currency.symbol}{formatCurrency(price.plans.part.installmentSize)}</strong> each.
      </p>
    <p>
      Payments will be automatically charged to my card on the {ordinal(day)} of each month.{' '}
      {day >= 29 ? <span>If there are fewer than {day} days in a month, my payment will be charged on the last day of that month. </span> : null}
        The monthly payments will start on {nextDay(day)}.</p>
  </>
);

const nextDay = (n: number): string => {
  const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const targetDate = new Date(); // start with today
  const interval = n - targetDate.getDate(); // the number of days between the true target and the current target

  if (interval < -7) {
    // add two months
    targetDate.setMonth(targetDate.getMonth() + 2);
    targetDate.setDate(targetDate.getDate() + interval);
  } else if (interval >= -7 && interval <= 24) {
    // add one month
    targetDate.setMonth(targetDate.getMonth() + 1);
    targetDate.setDate(targetDate.getDate() + interval);
  } else if (interval > 24) {
    // don't add any months
    targetDate.setDate(targetDate.getDate() + interval);
  }

  if (targetDate.getDate() !== n) { // went into the next month because the target month was too short
    targetDate.setDate(0); // set to the last day of the previous month
  }

  return `${months[targetDate.getMonth()]} ${targetDate.getDate()}`;
};
