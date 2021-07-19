/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-JULY21-active.svg';
import couponButtonSrc from './coupon-btn-JULY21.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210719: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 6, 30, 4)) { // July 30 at 00:00
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 1257;
    height = 544;
  } else {
    width = 514;
    height = 486;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'JULY21' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#9a9a9a', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <div className="text-white" style={{ backgroundColor: '#9a9a9a' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'JULY21'
            ? <img src={couponButtonAppliedSrc} width="297" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="297" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
