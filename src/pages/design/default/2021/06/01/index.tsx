/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-june21-active.svg';
import couponButtonSrc from './coupon-btn-june21.svg';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210601: React.FC<Props> = ({ date, currencyCode }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 5, 9, 16)) { // June 9 at 12:00
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 1257;
    height = 581;
  } else {
    width = 514;
    height = 486;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'JUNE21' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#0082b6', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <div className="text-white" style={{ backgroundColor: '#0082b6' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'JUNE21'
            ? <img src={couponButtonAppliedSrc} width="385" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="385" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
