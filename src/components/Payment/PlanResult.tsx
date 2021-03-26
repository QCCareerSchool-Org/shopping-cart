import React from 'react';
import Big from 'big.js';

import { useStateContext } from '../../hooks/useStateContext';
import { PriceResult } from '../../state/price';
import { Card, CardBody } from 'reactstrap';

type Props = {
  shippingOptionReversed: boolean;
}

export const PlanResult: React.FC<Props> = ({ shippingOptionReversed }) => {
  const { payment, price } = useStateContext();

  if (!price) {
    return null;
  }

  if (price.courses.length === 0) {
    return null;
  }

  return (
    <div className="d-flex justify-content-center justify-content-md-end">
      <Card className="d-inline-block w-auto w-sm-100 w-md-auto">
        <CardBody className="pb-0">
          {payment.plan === 'full' && (
            <>
              <h3 className="text-md-right">Pay in Full</h3>
              <Full price={price} shippingOptionReversed={shippingOptionReversed} />
            </>
          )}
          {payment.plan === 'part' && (
            <>
              <h3 className="text-md-right">Installment Plan</h3>
              <Part price={price} shippingOptionReversed={shippingOptionReversed} />
            </>
          )}
          <p className="text-md-right">All prices are in {price.currency.name}.</p>
        </CardBody>
      </Card>
    </div>
  );
};

const Full: React.FC<{ price: PriceResult; shippingOptionReversed: boolean }> = ({ price, shippingOptionReversed }) => {
  const symbol = price.currency.symbol;
  return (
    <table className="table table-borderless table-sm">
      <tbody>
        {price.courses.length > 1 && (
          <>
            {price.courses.map(course => (
              <React.Fragment key={course.code}>
                <tr>
                  <td className="text-md-right">{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
                  <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{Big(course.free ? 0 : course.cost).minus(shippingOptionReversed ? course.shipping : 0).toFixed(2)}</td>
                </tr>
                {!course.free && course.multiCourseDiscount > 0 && (
                  <tr className="text-primary">
                    <td className="text-md-right">{course.discountMessage ? course.discountMessage : <>{Math.round(course.multiCourseDiscount / course.cost * 100)}% Discount</>}</td>
                    <td className="text-right text-nowrap align-bottom">&minus; {price.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            <tr><td colSpan={2}><hr className="my-1" /></td></tr>
          </>
        )}
        {(price.promoDiscount > 0 || price.plans.full.discount > 0 || (!shippingOptionReversed && price.shippingDiscount > 0)) && (
          <>
            <tr>
              <td className="text-md-right">Course Cost:</td>
              {shippingOptionReversed
                ? <td className="text-right">{symbol}{Big(price.cost).minus(price.multiCourseDiscount).minus(price.shipping).toFixed(2)}</td> // we subtract the shipping cost right away and then add it back later if the visitor chose to have shipping
                : <td className="text-right">{symbol}{Big(price.cost).minus(price.multiCourseDiscount).toFixed(2)}</td>
              }
            </tr>
            {price.promoDiscount > 0 && (
              <tr>
                <td className="text-md-right">Promotional Discount:</td>
                <td className="text-right">&minus; {symbol}{price.promoDiscount.toFixed(2)}</td>
              </tr>
            )}
            {price.plans.full.discount > 0 && (
              <tr>
                <td className="text-md-right">Full-Payment Discount:</td>
                <td className="text-right">&minus; {symbol}{price.plans.full.discount.toFixed(2)}</td>
              </tr>
            )}
            {!shippingOptionReversed && price.shippingDiscount > 0 && (
              <tr>
                <td className="text-md-right">{price.noShipping === 'REQUIRED' ? 'No-Shipping' : 'Green'} Discount:</td>
                <td className="text-right">&minus; {symbol}{price.shippingDiscount.toFixed(2)}</td>
              </tr>
            )}
            <tr><td colSpan={2}><hr className="my-1" /></td></tr>
          </>
        )}
        {shippingOptionReversed && price.shippingDiscount === 0 && (
          <>
            <tr>
              <td className="text-md-right">Subtotal:</td>
              <td className="text-right">{symbol}{Big(price.plans.full.total).minus(price.shipping).toFixed(2)}</td>
            </tr>
            <tr>
              <td className="text-md-right">Shipping Cost:</td>
              <td className="text-right">{symbol}{price.shipping.toFixed(2)}</td>
            </tr>
            <tr><td colSpan={2}><hr className="my-1" /></td></tr>
          </>
        )}
        <tr className="font-weight-bold">
          <td className="text-md-right">Total:</td>
          <td className="text-right">{symbol}{price.plans.full.total.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Part: React.FC<{ price: PriceResult; shippingOptionReversed: boolean }> = ({ price, shippingOptionReversed }) => {
  const symbol = price.currency.symbol;
  return (
    <table className="table table-borderless table-sm">
      <tbody>
        {price.courses.length > 1 && (
          <>
            {price.courses.map(course => (
              <React.Fragment key={course.code}>
                <tr>
                  <td className="text-md-right">{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
                  <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{Big(course.free ? 0 : course.cost).minus(shippingOptionReversed ? course.shipping : 0).toFixed(2)}</td>
                </tr>
                {!course.free && course.multiCourseDiscount > 0 && (
                  <tr className="text-primary">
                    <td className="text-md-right">{course.discountMessage ? course.discountMessage : <>{Math.round(course.multiCourseDiscount / course.cost * 100)}% Discount</>}</td>
                    <td className="text-right text-nowrap align-bottom">&minus; {price.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            <tr><td colSpan={2}><hr className="my-1" /></td></tr>
          </>
        )}
        {(price.promoDiscount > 0 || price.plans.part.discount > 0 || (!shippingOptionReversed && price.shippingDiscount > 0)) && (
          <>
            <tr>
              <td className="text-md-right">Course Cost:</td>
              {shippingOptionReversed
                ? <td className="text-right">{symbol}{Big(price.cost).minus(price.multiCourseDiscount).minus(price.shipping).toFixed(2)}</td>
                : <td className="text-right">{symbol}{Big(price.cost).minus(price.multiCourseDiscount).toFixed(2)}</td>
              }
            </tr>
            {price.promoDiscount > 0 && (
              <>
                <tr>
                  <td className="text-md-right">Promotional Discount:</td>
                  <td className="text-right">&minus; {symbol}{price.promoDiscount.toFixed(2)}</td>
                </tr>
              </>
            )}
            {!shippingOptionReversed && price.shippingDiscount > 0 && (
              <>
                <tr>
                  <td className="text-md-right">{price.noShipping === 'REQUIRED' ? 'No-Shipping' : 'Green'} Discount:</td>
                  <td className="text-right">&minus; {symbol}{price.shippingDiscount.toFixed(2)}</td>
                </tr>
              </>
            )}
            {price.plans.part.discount > 0 && (
              <>
                <tr>
                  <td className="text-md-right">Payment Plan Discount:</td>
                  <td className="text-right">&minus; {symbol}{price.plans.part.discount.toFixed(2)}</td>
                </tr>
              </>
            )}
            <tr><td colSpan={2}><hr className="my-1" /></td></tr>
          </>
        )}
        {shippingOptionReversed && price.shippingDiscount === 0 && (
          <>
            <tr>
              <td className="text-md-right">Subtotal:</td>
              <td className="text-right">{symbol}{Big(price.plans.part.total).minus(price.shipping).toFixed(2)}</td>
            </tr>
            <tr>
              <td className="text-md-right">Shipping Cost:</td>
              <td className="text-right">{symbol}{price.shipping.toFixed(2)}</td>
            </tr>
            <tr><td colSpan={2}><hr className="my-1" /></td></tr>
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
  );
};
