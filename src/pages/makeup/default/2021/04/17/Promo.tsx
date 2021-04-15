import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImage } from '../../../../../../hooks/usePreloadImage';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonSrc from './coupon-btn.svg';
import couponButtonAppliedSrc from './coupon-btn-applied.svg';
import { url } from 'inspector';
import { PriceResult } from '../../../../../../state/price';

type Props = {
  date: Date;
  currencyCode: string;
}

export const Promo20210417: React.FC<Props> = ({ date, currencyCode }) => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const dispatch = useDispatchContext();

  usePreloadImage(couponButtonAppliedSrc);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 3, 14, 16)) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 418;
  } else {
    width = 600;
    height = 403;
  }

  const button1Click = () => {
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SPRING21' });
  };

  const button2Click = () => {
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SPRING21' });
  };

  const button3Click = () => {
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SPRING21' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#dff1ff', padding: 0 }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-4">
              <div style={{ backgroundSize: 'cover', backgroundImage: `url(${require('./tag1.jpg')})` }}>
                <p>sldkfjdslkfjsdflkjsdf</p>
                {price?.promoCode === 'SPRING21'
                  ? <img src={couponButtonAppliedSrc} width="399" height="62" className="img-fluid" alt="Promo Code" />
                  : <button onClick={button1Click} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="399" height="62" className="img-fluid" alt="Promo Code" /></button>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
