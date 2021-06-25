/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-divein-active.svg';
import couponButtonSrc from './coupon-btn-divein.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210626: React.FC<Props> = ({ date, currencyCode }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date(2021, 5, 26, 23, 59)) { // June 26 at 23:59
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
    width = 1257;
    height = 581;
  } else {
    width = 514;
    height = 486;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'DIVEIN' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#20171a', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <div className="text-white" style={{ backgroundColor: '#20171a' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'DIVEIN'
            ? <img src={couponButtonAppliedSrc} width="385" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="385" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
