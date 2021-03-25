import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { useDispatchContext } from '../../hooks/useDispatchContext';
import { usePopup } from '../../hooks/usePopup';
import { useStateContext } from '../../hooks/useStateContext';
import { PromoCode } from '../PromoCode';
import { PromoPopup } from './PromoPopup';

export type Promo = {
  code: string;
  description: React.ReactNode;
  desktopImageSrc: any;
  mobileImageSrc: any;
  altText: string;
}

type Props = {
  promos: Promo[];
};

export const PromoCodeInput: React.FC<Props> = ({ promos }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const { price, meta: { promoCode, promoCodeInputValue } } = useStateContext();
  const dispatch = useDispatchContext();

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_PROMO_CODE_INPUT_VALUE', payload: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'SET_PROMO_CODE', payload: promoCodeInputValue });
  };

  const popupApply = (code: string) => {
    dispatch({ type: 'SET_PROMO_CODE', payload: code });
  };

  return (
    <div className="mt-4">
      <h3>Promo Code</h3>
      {promoCode && price?.promoCodeRecognized === true
        ? (
          <div className={`alert ${price?.promoWarnings.length > 0 ? 'alert-danger' : 'alert-success'} alert-dismissible`} role="alert">
            {price.promoWarnings.length > 0
              ? price.promoWarnings.map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} className={`mb-0 ${i > 0 ? 'mt-2' : ''}`}></p>)
              : <>Promo code applied: <PromoCode>{promoCode}</PromoCode></>
            }
            <button onClick={() => { dispatch({ type: 'CLEAR_PROMO_CODE' }); }} type="button" className="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )
        : (
          <div style={{ maxWidth: 301 }}>
            <form onSubmit={submit}>
              <div className="form-row">
                <div className="col-7">
                  <input onChange={change} type="text" className="form-control text-center text-uppercase font-weight-bold" style={{ letterSpacing: '0.75px' }} value={promoCodeInputValue} aria-describedby="promoHelp" />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-secondary"><FontAwesomeIcon icon={faTag} /> Apply</button>
                </div>
              </div>
              {promos.length > 0 && (
                <div id="promoHelp" className="form-text" style={{ lineHeight: '1rem' }}>
                  <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" style={{ lineHeight: 'inherit' }} onClick={e => { e.preventDefault(); togglePopup(); }}><small>Need a code? Get one here</small></button>
                </div>
              )}
            </form>
            {price?.promoCodeRecognized === false && (<div className="alert alert-danger mt-3">Unrecognized code</div>)}
            <PromoPopup popup={popup} togglePopup={togglePopup} apply={popupApply} promos={promos} />
          </div>
        )}
    </div>
  );
};
