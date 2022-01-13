import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { PromoCode } from '../../../../../../components/PromoCode';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-PROBRUSHES-active.svg';
import couponButtonSrc from './coupon-btn-PROBRUSHES.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210918: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 8, 19, 4)) { // September 19 at 00:00 (04:00 UTC)
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
    height = 502;
  } else {
    width = 600;
    height = 705;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'GB', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'PROBRUSHES' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#000', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>FREE Course and Smokey Eye Brush Set</ModalHeader>
          <ModalBody>
            <p>Enroll in QC&apos;s <strong>Master Makeup Artistry</strong> course and use promo code <PromoCode>PROBRUSHES</PromoCode> to get the <strong>Global Beauty Workshop</strong> for FREE. This means you&apos;ll save $1046!</p>
            <p>But here&apos;s the cherry on top: you&apos;ll also receive the Smokey Eye Brush Set as a bonus gift!</p>
            <p>QC&apos;s Master Makeup Artistry Course comes with a FREE makeup kit you&apos;ll use to excel in your course and your career.</p>
            <p>In the Global Beauty Workshop, you&apos;ll advance the  makeup skills you learned in your Master Makeup Artistry Course!</p>
            <ul>
              <li>Get even more practice working with all different skin tones</li>
              <li>Create gorgeous makeup looks from different cultural and religious traditions around the world </li>
              <li>Learn how to create beautiful henna designs for brides</li>
              <li>+ BONUS Makeup Kit &amp; henna paste!</li>
            </ul>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#000' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'PROBRUSHES'
            ? <img src={couponButtonAppliedSrc} width="352" height="57" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="352" height="57" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
