/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './button-SUMMER21-active.svg';
import couponButtonSrc from './button-SUMMER21.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210717: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 6, 18, 4)) { // July 18 at 00:00
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 436;
  } else {
    width = 440;
    height = 414;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SUMMER21' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#039bf5', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            {/* <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}> */}
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            {/* </button> */}
          </div>
        </div>
        {/* <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
          <ModalBody className="text-center">
            <p>Get {price?.currency.code === 'GBP' ? '£154' : '$154'} off your tuition when you enroll in any online event course!</p>
          </ModalBody>
        </Modal> */}
      </section>
      <div className="text-white" style={{ backgroundColor: '#039bf5' }}>
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
