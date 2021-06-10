/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Helmet } from 'react-helmet';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-elite-active.svg';
import couponButtonSrc from './coupon-btn-elite.svg';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210417: React.FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const dispatch = useDispatchContext();

  usePreloadImages([ couponButtonAppliedSrc ]);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 3, 18, 4)) { // April 18 00:00
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
    // dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'ELITE' });
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Free Elite Makeup Kit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enroll.qcmakeupacademy.com/" />
        <meta property="og:image" content={`https://enroll.qcmakeupacademy.com${require('./featured-image.jpg').default}`} />
      </Helmet>
      <section id="promoSection" style={{ backgroundColor: '#000', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <div className="text-white" style={{ backgroundColor: '#000' }}>
        <div className="container pt-4 pb-2 d-flex justify-content-center">
          {price?.promoCode === 'ELITE'
            ? <img src={couponButtonAppliedSrc} width="399" height="62" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="399" height="62" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
