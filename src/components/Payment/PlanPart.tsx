import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

export const PlanPart: React.FC = () => {
  const { payment } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value !== 'on') {
      return;
    }
    dispatch({ type: 'SET_PAYMENT_PLAN', payload: 'part' });
  };

  return (
    <div className="custom-control custom-radio">
      <input
        type="radio"
        id="planPart"
        className="custom-control-input payment-plan"
        name="paymentPlan"
        checked={payment.plan === 'part'}
        onChange={change}
      />
      <label htmlFor="planPart" className="custom-control-label">
        Installment Plan<span id="savings-part" style={{ display: 'none' }}>—<span className="text-primary" id="savings-amount-part"></span></span>
      </label>
    </div>
  );
};
