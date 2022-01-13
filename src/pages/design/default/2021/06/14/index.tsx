/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-SUMMER21-active.svg';
import couponButtonSrc from './coupon-btn-SUMMER21.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210614: React.FC<Props> = ({ date, currencyCode }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 5, 23, 16)) { // June 23 at 12:00
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
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
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SUMMER21' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#fec901', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <div className="text-white" style={{ backgroundColor: '#fec901' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'SUMMER21'
            ? <img src={couponButtonAppliedSrc} width="385" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="385" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
