import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { PromoCode } from '../../../../../../components/PromoCode';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-SKINCARE60-active.svg';
import couponButtonSrc from './coupon-btn-SKINCARE60.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210920: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 8, 30, 4)) { // September 30 at 00:00 (04:00 UTC)
    if (desktop) {
      image = require('./desktop-ends.jpg').default;
    } else {
      image = require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 976;
    height = 502;
  } else {
    width = 600;
    height = 705;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'SK', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SKINCARE60' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#bfc1c0', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>60% Off Skincare</ModalHeader>
          <ModalBody>
            <p>Enroll in QC&apos;s Master Makeup Artistry and use promo code <PromoCode>SKINCARE60</PromoCode> to get the Skincare Course 60% off!</p>
            <p>QC&apos;s Master Makeup Artistry Course lays the foundation for your makeup career. Your tuition also includes a FREE professional makeup kit to help you get started.</p>
            <p>With QC&apos;s built-in business training, you&apos;ll learn how to build the beauty empire you&apos;ve always dreamed of.</p>
            <p>QC&apos;s Skincare Course teaches you how to work with different skin types. You&apos;ll learn how to prepare your clients for flawless makeup applications. Plus, you&apos;ll be able to design skincare routines for them. This will add a huge revenue stream to your business!</p>
            <p>Graduate as both a Master International Makeup Professional (MIMP) and as a Certified Skincare Consultant in just a few months!</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#bfc1c0' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'SKINCARE60'
            ? <img src={couponButtonAppliedSrc} width="352" height="57" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="352" height="57" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
