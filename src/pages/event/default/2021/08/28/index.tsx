/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { PromoCode } from '../../../../../../components/PromoCode';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-SCHOOLKIT-active.svg';
import couponButtonSrc from './coupon-btn-SCHOOLKIT.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210828: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 7, 29, 4)) { // August 29 at 00:00 (04:00 UTC)
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
    height = 500;
  } else {
    width = 514;
    height = 614;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'CE', internal: false } });
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'WP', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'EP', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SCHOOLKIT' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#fff', padding: 0 }}>
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
            <p>Enroll in QC&apos;s <strong>Event and Wedding Planning</strong> course and get ANY specialty course FREE. You&apos;ll also receive the <strong>Back-to-School Kit</strong>. This kit includes a notebook, a QC tote bag, and&mdash;for this weekend only&mdash;a leather portfolio! The kit is valued at {price?.currency.code === 'GBP' ? '£50' : '$75'}.</p>
            <p className="mb-0">Just select the <strong>Event &amp; Wedding Planning</strong> course and use promo code <PromoCode>SCHOOLKIT</PromoCode>.</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#fff' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'SCHOOLKIT'
            ? <img src={couponButtonAppliedSrc} width="297" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="297" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
