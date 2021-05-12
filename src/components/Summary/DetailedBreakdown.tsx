/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { Fragment } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { formatCurrency } from '../../lib/formatCurrency';
import { PaymentState } from '../../state/payment';
import { PriceResult } from '../../state/price';

type Props = {
  isOpen: boolean;
  toggle: () => void;
  payment: PaymentState;
  price: PriceResult;
};

export const DetailedBreakdown: React.FC<Props> = ({ isOpen, toggle, payment, price }) => (
  <Modal isOpen={isOpen} toggle={toggle}>
    <ModalHeader toggle={toggle}>Detailed Payment Breakdown</ModalHeader>
    <ModalBody>
      {payment.plan === 'full' ? <FullBreakdown price={price} /> : <PartBreakdown price={price} />}
      <p className="mb-0">All prices are in {price.currency.name}.</p>
    </ModalBody>
  </Modal>
);

const FullBreakdown: React.FC<{ price: PriceResult }> = ({ price }) => (
  <div>
    <p>The total cost of your courses is <strong>{price.currency.symbol}{formatCurrency(price.plans.full.total)}</strong>. Your payments are broken down as follows:</p>
    <table className="w-100">
      <tbody>
        <CostRows price={price} plan="full" />
      </tbody>
    </table>
  </div>
);

const PartBreakdown: React.FC<{ price: PriceResult }> = ({ price }) => (
  <div>
    <p>The total cost of your courses is <strong>{price.currency.symbol}{price.plans.part.total.toFixed(2)}</strong>. Your payments are broken down as follows:</p>
    <table className="w-100">
      <tbody>
        <CostRows price={price} plan="part" />
      </tbody>
    </table>
    <h6>Deposit</h6>
    <p>When you enroll you&apos;ll be charged a deposit of <strong>{price.currency.symbol}{price.plans.part.deposit.toFixed(2)}</strong>:</p>
    <table className="w-100">
      <tbody>
        <DepositRows price={price} plan="part" />
      </tbody>
    </table>
    <h6>Monthly Installments</h6>
    <p>Each month, for <strong>{price.plans.part.installments} months</strong>, your card will automatically be charged as follows:</p>
    <table className="w-100">
      <tbody>
        <InstallmentRows price={price} plan="part" />
      </tbody>
    </table>
  </div>
);

const CostRows: React.FC<{ price: PriceResult; plan: 'full' | 'part' }> = ({ price, plan }) => {
  let key = 0;
  return (
    <>
      {price.courses.filter(course => course.primary).map(course => (
        <Fragment key={key++}>
          <tr>
            <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{(course.free ? 0 : course.cost).toFixed(2)}</td>
          </tr>
          {course.plans[plan].discount > 0 && (
            <tr>
              <td>Payment Plan Discount</td>
              <td className="text-right text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.plans[plan].discount.toFixed(2)}</td>
            </tr>
          )}
          {!course.free && course.multiCourseDiscount > 0 && (
            <tr>
              <td>Multi-Course Discount</td>
              <td className="text-right text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
            </tr>
          )}
        </Fragment>
      ))}
      {price.courses.filter(course => !course.primary).map(course => (
        <Fragment key={key++}>
          <tr>
            <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
            <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{(course.free ? 0 : course.cost).toFixed(2)}</td>
          </tr>
          {course.plans[plan].discount > 0 && (
            <tr>
              <td>Payment Plan Discount</td>
              <td className="text-right text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.plans[plan].discount.toFixed(2)}</td>
            </tr>
          )}
          {!course.free && course.multiCourseDiscount > 0 && (
            <tr>
              <td>{Math.round(course.multiCourseDiscount / course.cost * 100)}% Off Discount</td>
              <td className="text-right text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{course.multiCourseDiscount.toFixed(2)}</td>
            </tr>
          )}
        </Fragment>
      ))}
      {price.promoDiscount > 0 && (
        <tr>
          <td>Promo Discount</td>
          <td className="text-right text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{price.promoDiscount.toFixed(2)}</td>
        </tr>
      )}
      {price.shippingDiscount > 0 && (
        <tr>
          <td>{price.noShipping === 'REQUIRED' ? 'No-Shipping' : 'Green'} Discount</td>
          <td className="text-right text-primary text-nowrap align-bottom">&minus; {price.currency.symbol}{price.shippingDiscount.toFixed(2)}</td>
        </tr>
      )}
      <tr>
        <td></td>
        <td><hr className="my-1" /></td>
      </tr>
      <tr>
        <td></td>
        <td className="text-right text-nowrap align-bottom"><strong>{price.currency.symbol}{price.plans[plan].total.toFixed(2)}</strong></td>
      </tr>
    </>
  );
};

const DepositRows: React.FC<{ price: PriceResult; plan: 'full' | 'part' }> = ({ price, plan }) => {
  let key = 0;
  return (
    <>
      {price.courses.filter(course => course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].deposit.toFixed(2)}</td>
        </tr>
      ))}
      {price.courses.filter(course => !course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].deposit.toFixed(2)}</td>
        </tr>
      ))}
      <tr>
        <td></td>
        <td><hr className="my-1" /></td>
      </tr>
      <tr>
        <td></td>
        <td className="text-right text-nowrap align-bottom"><strong>{price.currency.symbol}{price.plans[plan].deposit.toFixed(2)}</strong></td>
      </tr>
    </>
  );
};

const InstallmentRows: React.FC<{ price: PriceResult; plan: 'full' | 'part' }> = ({ price, plan }) => {
  let key = 0;
  return (
    <>
      {price.courses.filter(course => course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].installmentSize.toFixed(2)}</td>
        </tr>
      ))}
      {price.courses.filter(course => !course.primary).map(course => (
        <tr key={key++}>
          <td>{course.name}{course.free && <>{' '}<strong className="text-primary">FREE!</strong></>}</td>
          <td className="text-right text-nowrap align-bottom">{price.currency.symbol}{course.plans[plan].installmentSize.toFixed(2)}</td>
        </tr>
      ))}
      <tr>
        <td></td>
        <td><hr className="my-1" /></td>
      </tr>
      <tr>
        <td></td>
        <td className="text-right text-nowrap align-bottom"><strong>{price.currency.symbol}{price.plans[plan].installmentSize.toFixed(2)}</strong></td>
      </tr>
    </>
  );
};
