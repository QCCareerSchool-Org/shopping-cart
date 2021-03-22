import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { usePopup } from '../../hooks/usePopup';
import { useStateContext } from '../../hooks/useStateContext';
import { PromoPopup } from './PromoPopup';

export const PromoCodeInput: React.FC = () => {
  const [ popup, togglePopup ] = usePopup(false);
  const { price, meta: { promoCode } } = useStateContext();
  const dispatch = useDispatchContext();

  const [ localValue, setLocalValue ] = useState(promoCode);

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_PROMO_CODE', payload: localValue.toLocaleUpperCase() });
  };

  const popupApply = (code: string) => {
    setLocalValue(code);
    dispatch({ type: 'SET_PROMO_CODE', payload: code });
  };

  return (
    <div className="mt-4">
      <h3>Promo Code</h3>
      {promoCode && price?.promoCodeRecognized === true
        ? (
          <div className="alert alert-success alert-dismissible" role="alert">
            Promo code applied: <strong>{promoCode}</strong>
            <button onClick={e => { dispatch({ type: 'SET_PROMO_CODE', payload: '' }); }} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )
        : (
          <div style={{ maxWidth: 301 }}>
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="col-7">
                  <input onChange={change} type="text" className="form-control text-center text-uppercase font-weight-bold" style={{ letterSpacing: '0.75px' }} value={localValue} aria-describedby="promoHelp" />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-secondary"><FontAwesomeIcon icon={faTag} /> Apply</button>
                </div>
              </div>
              <div id="promoHelp" className="form-text" style={{ lineHeight: '1rem' }}>
                <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" style={{ lineHeight: 'inherit' }} onClick={e => { e.preventDefault(); togglePopup(); }}><small>Need a code? Get one here</small></button>
              </div>
            </form>
            {price?.promoCodeRecognized === false && (<div className="alert alert-danger mt-3">Unrecognized code</div>)}
            <PromoPopup popup={popup} togglePopup={togglePopup} apply={popupApply} />
          </div>
        )}
    </div>
  );
};