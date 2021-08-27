/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { PromoCode } from '../../../../../../components/PromoCode';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-BACK2SCHOOL-active.svg';
import couponButtonSrc from './coupon-btn-BACK2SCHOOL.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210816: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 7, 25, 4)) { // August 25 at 00:00 (04:00 UTC)
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
    height = 503;
  } else {
    width = 514;
    height = 526;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'BACK2SCHOOL' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#060606', padding: 0 }}>
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
            <p>Just use promo code <PromoCode>BACK2SCHOOL</PromoCode>.</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#060606' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'BACK2SCHOOL'
            ? <img src={couponButtonAppliedSrc} width="297" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="297" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
