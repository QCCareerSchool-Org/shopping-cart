/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImage } from '../../../../../../hooks/usePreloadImage';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-happymay-active.svg';
import couponButtonSrc from './coupon-btn-happymay.svg';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210501: React.FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const dispatch = useDispatchContext();

  usePreloadImage(couponButtonAppliedSrc);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 4, 2, 4)) { // May 2 at 00:00
    if (desktop) {
      image = require('./desktop-ends.jpg').default;
    } else {
      image = require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg').default;
    } else {
      image = require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 976;
    height = 563;
  } else {
    width = 600;
    height = 732;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'VM', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'HAPPYMAY' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#000', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <div className="text-white" style={{ backgroundColor: '#000' }}>
        <div className="container py-2 pb-4 d-flex justify-content-center">
          {price?.promoCode === 'HAPPYMAY'
            ? <img src={couponButtonAppliedSrc} width="352" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="352" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
