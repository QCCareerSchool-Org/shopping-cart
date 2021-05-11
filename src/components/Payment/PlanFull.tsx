import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { formatCurrency } from '../../lib/formatCurrency';

export const PlanFull: React.FC = () => {
  const { payment, price } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value !== 'on') {
      return;
    }
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'full' });
  };

  return (
    <div className="custom-control custom-radio">
      <input
        type="radio"
        id="plan-full"
        className="custom-control-input payment-plan"
        checked={payment.plan === 'full'}
        onChange={change}
      />
      <label htmlFor="plan-full" className="custom-control-label">
        Pay in Full{price?.plans.full.discount ? <span>—<span className="text-primary">Save {price?.currency.symbol + formatCurrency(price.plans.full.discount)}</span></span> : null}
      </label>
    </div>
  );
};
