/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { PromoCode } from '../../../../../../components/PromoCode';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-BCK2S-active.svg';
import couponButtonSrc from './coupon-btn-BCK2S.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210830: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 8, 6, 4)) { // September 6 at 00:00 (04:00 UTC)
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
    width = 1257;
    height = 503;
  } else {
    width = 514;
    height = 614;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'BCK2S' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#152327', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Back-to-School Special Offer</ModalHeader>
          <ModalBody>
            <p>Enroll in ANY online design course and get a FREE second course of your choice. Plus, get the Back-to-School Kit! This kit includes an eco-friendly notebook and a QC tote bag. Kit is valued at $50.</p>
            <p className="mb-0">Just use promo code <PromoCode>BCK2S</PromoCode>.</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#152327' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'BCK2S'
            ? <img src={couponButtonAppliedSrc} width="297" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="297" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
