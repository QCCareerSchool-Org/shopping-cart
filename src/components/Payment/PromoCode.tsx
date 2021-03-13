import React, { useState } from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { usePopup } from '../../hooks/usePopup';
import { useStateContext } from '../../hooks/useStateContext';
import { PromoPopup } from './PromoPopup';

export const PromoCode: React.FC = () => {
  const [ popup, togglePopup ] = usePopup(false);
  const { meta: { promoCode } } = useStateContext();
  const dispatch = useDispatchContext();

  const [ localValue, setLocalValue ] = useState(promoCode);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const apply = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: 'SET_PROMO_CODE', payload: localValue.toLocaleUpperCase() });
  };

  const popupApply = (code: string) => {
    setLocalValue(code);
    dispatch({ type: 'SET_PROMO_CODE', payload: code });
  };

  return (
    <div className="mt-4 ml-md-auto" style={{ maxWidth: 301 }}>
      <h3 className="text-md-right">Promo Code</h3>
        <div className="form-row">
          <div className="col-7 offset-md-2">
            <input onChange={change} type="text" className="form-control text-center text-uppercase font-weight-bold" style={{ letterSpacing: '0.75px' }} value={localValue} aria-describedby="promoHelp" />
          </div>
          <div className="col-3">
            <button onClick={apply} className="btn btn-secondary">Apply</button>
          </div>
        </div>
        <small id="promoHelp" className="form-text text-muted text-md-right"><a href="#" onClick={e => { e.preventDefault(); togglePopup(); }}>Need a code? Get one here</a></small>
      <PromoPopup popup={popup} togglePopup={togglePopup} apply={popupApply} />
    </div>
  );
};
