/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-canada154-active.svg';
import couponButtonSrc from './coupon-btn-canada154.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210628: React.FC<Props> = ({ date, currencyCode }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date(2021, 6, 5, 12)) { // July 5 at 12:00
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
    height = 581;
  } else {
    width = 514;
    height = 486;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'CANADA154' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#500001', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
          <ModalBody className="text-center">
            <p>Get {price?.currency.code === 'GBP' ? '£154' : '$154'} off your tuition when you enroll in any online event course!</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#500001' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'CANADA154'
            ? <img src={couponButtonAppliedSrc} width="385" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="385" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
