import React from 'react';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';

const days: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 ];

const ordinal = (n: number): string => {
  const s = [ 'th', 'st', 'nd', 'rd' ];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const Schedule: React.FC = () => {
  const { payment: { day } } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SET_PAYMENT_DATE', payload: parseInt(e.target.value, 10) });
  };

  return (
    <div className="form-group">
      <label htmlFor="paymentDay">Processed on</label>
      <select id="paymentDay" className="form-control" value={day} onChange={change}>
        {days.map(i => (<option key={i} value={i}>The {ordinal(i)} of each month</option>))}
      </select>
    </div>
  );
};
