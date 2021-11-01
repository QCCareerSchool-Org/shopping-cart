/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { PromoCode } from '../../../../../../components/PromoCode';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-TREAT-active.svg';
import couponButtonSrc from './coupon-btn-TREAT.svg';

const endDate = new Date(Date.UTC(2021, 9, 31, 4));
const showDate = new Date(Date.UTC(2021, 9, 24, 4));

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20211001: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 9, 29, 4)) { // October 29 at 00:00 (04:00 UTC)
    if (desktop) {
      image = price?.promoCode === 'TREAT' ? require('./desktop-ends-active.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = price?.promoCode === 'TREAT' ? require('./mobile-ends-active.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = price?.promoCode === 'TREAT' ? require('./desktop-active.jpg').default : require('./desktop.jpg').default;
    } else {
      image = price?.promoCode === 'TREAT' ? require('./mobile-active.jpg').default : require('./mobile.jpg').default;
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
    dispatch({ type: 'SET_PROMO_CODE', payload: 'TREAT' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#000', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={buttonClick}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <h5>Get a FREE Certification Course!</h5>
            <p>Enroll in ANY of QC&apos;s online design courses and use promo code <PromoCode>TREAT</PromoCode> to get any 2nd course for FREE. This means you could save up to $1498!</p>
            <p>Plus, you&apos;ll receive the NEW easy-to-use laser &ldquo;tape&rdquo; measure. It makes measuring rooms an absolute breeze.</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={showDate}
        endDate={endDate}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>free course and laser tape measure</strong> offer <strong className="endHighlight">ends {date.getTime() >= endDate.getTime() - (1000 * 60 * 60 * 24) ? 'today' : 'soon'}</strong></span>}
        className="text-white"
        style={{ backgroundColor: 'black' }}
      />
      <div className="text-white" style={{ backgroundColor: '#000' }}>
        <div className="container py-3 d-flex justify-content-center">
          <button onClick={togglePopup} className="btn btn-secondary">View Offer Details</button>
        </div>
      </div>
    </>
  );
};
