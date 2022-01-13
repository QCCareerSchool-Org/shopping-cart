/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-elite-active.svg';
import couponButtonSrc from './coupon-btn-elite.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210731: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 7, 1, 4)) { // August 1 at 00:00
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg');
    } else {
      image = require('./mobile.jpg');
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
    dispatch({ type: 'SET_PROMO_CODE', payload: 'ELITE' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#fff', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <div className="text-white" style={{ backgroundColor: '#fff' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'ELITE'
            ? <img src={couponButtonAppliedSrc} width="352" height="57" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="352" height="57" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
