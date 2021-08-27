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
    height = 502;
  } else {
    width = 600;
    height = 705;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'BCK2S' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#151b28', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <p>Enroll in QC&apos;s <strong>Master Makeup Artistry Course</strong> and you&apos;ll get a <strong>FREE set of professional brushes</strong> to create the perfect smokey eye.</p>
            <p>This professional set includes four brushes:</p>
            <ol>
              <li>angled eyeliner brush</li>
              <li>universal eyeshadow brush</li>
              <li>crease brush</li>
              <li>smudge brush</li>
            </ol>
            <p>Each brush is 100% synthetic.</p>
            <p>You&apos;ll also receive the <strong>Grab-and-Go Kit</strong>! This kit is valued at {price?.currency.code === 'GBP' ? '£40' : '$50'} and includes a QC tote bag, notebook, and pencil.</p>
            <p>Select the <strong>Master Makeup Artistry</strong> course and use promo code <PromoCode>BCK2S</PromoCode> to get the <strong>smokey eye brush set</strong> and <strong>Grab-and-Go Kit</strong></p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#151b28' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'BCK2S'
            ? <img src={couponButtonAppliedSrc} width="352" height="57" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="352" height="57" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
