import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImage } from '../../../../../../hooks/usePreloadImage';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonSrc from './coupon-btn-elite.svg';
import couponButtonAppliedSrc from './coupon-btn-elite-active.svg';
import { Helmet } from 'react-helmet';

type Props = {
  date: Date;
  currencyCode: string;
}

export const Promo20210417: React.FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const dispatch = useDispatchContext();

  usePreloadImage(couponButtonAppliedSrc);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 3, 18, 4)) { // April 18 00:00
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

  const buttonClick = () => {
    // dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'ELITE' });
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Free Elite Makeup Kit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enroll.qcmakeupacademy.com/" />
        <meta property="og:image" content={require('./featured-image.jpg')} />
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
