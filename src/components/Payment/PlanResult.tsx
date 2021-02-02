import React from 'react';
import Big from 'big.js';

import { useStateContext } from '../../hooks/useStateContext';
import { PriceResult } from '../../state/price';

export const PlanResult: React.FC = () => {
  const { payment, price } = useStateContext();

  if (!price) {
    return null;
  }

  if (price.courses.length === 0) {
    return null;
  }

  return (
    <>
      {payment.plan === 'full' && <Full price={price} />}
      {payment.plan === 'part' && <Part price={price} />}
      <p className="text-md-right">All prices are in {price.currency.name}.</p>
    </>
  );
};

const Full: React.FC<{ price: PriceResult }> = ({ price }) => {
  const symbol = price.currency.symbol;
  return (
    <>
      <h3 className="text-md-right">Pay in Full</h3>
      <table className="table table-borderless table-sm">
        <tbody>
          <tr>
            <td className="text-md-right">Course Cost:</td>
            <td className="text-right">{symbol}{Big(price.discountedCost).plus(price.promoDiscount).plus(price.shippingDiscount).toFixed(2)}</td>
          </tr>
          {price.promoDiscount > 0 && (
            <tr>
              <td className="text-md-right">Promotional Discount:</td>
              <td className="text-right">&minus; {symbol}{price.promoDiscount.toFixed(2)}</td>
            </tr>
          )}
          {price.shippingDiscount > 0 && (
            <tr>
              <td className="text-md-right">{price.noShipping === 'REQUIRED' ? 'No-Shipping' : 'Green'} Discount:</td>
              <td className="text-right">&minus; {symbol}{price.shippingDiscount.toFixed(2)}</td>
            </tr>
          )}
          {price.plans.full.discount > 0 && (
            <tr>
              <td className="text-md-right">Full-Payment Discount:</td>
              <td className="text-right">&minus; {symbol}{price.plans.full.discount.toFixed(2)}</td>
            </tr>
          )}
          <tr className="font-weight-bold">
            <td className="text-md-right">Total:</td>
            <td className="text-right">{symbol}{price.plans.full.total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Part: React.FC<{ price: PriceResult }> = ({ price }) => {
  const symbol = price.currency.symbol;
  return (
    <>
      <h3 className="text-md-right">Installment Plan</h3>
      <table className="table table-borderless table-sm">
        <tbody>
          {(price.promoDiscount > 0 || price.shippingDiscount > 0) && (
            <>
              <tr>
                <td className="text-md-right">Subtotal:</td>
                <td className="text-right">{symbol}{Big(price.discountedCost).plus(price.promoDiscount).plus(price.shippingDiscount).toFixed(2)}</td>
              </tr>
              {price.promoDiscount > 0 && (
                <>
                  <tr>
                    <td className="text-md-right">Promotional Discount:</td>
                    <td className="text-right">&minus; {symbol}{price.promoDiscount.toFixed(2)}</td>
                  </tr>
                </>
              )}
              {price.shippingDiscount > 0 && (
                <>
                  <tr>
                    <td className="text-md-right">{price.noShipping === 'REQUIRED' ? 'No-Shipping' : 'Green'} Discount:</td>
                    <td className="text-right">&minus; {symbol}{price.shippingDiscount.toFixed(2)}</td>
                  </tr>
                </>
              )}
              <tr><td colSpan={2}><hr /></td></tr>
            </>
          )}
          <tr>
            <td className="text-md-right">Initial Deposit:</td>
            <td className="text-right">{symbol}{price.plans.part.deposit.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="text-md-right">Monthly Installments:</td>
            <td className="text-right">{price.plans.part.installments} &times; {symbol}{price.plans.part.installmentSize.toFixed(2)}</td>
          </tr>
          <tr className="font-weight-bold">
            <td className="text-md-right">Total:</td>
            <td className="text-right">{symbol}{price.plans.part.total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
