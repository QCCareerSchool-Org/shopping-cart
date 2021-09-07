import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { PromoCode } from '../../../../../../components/PromoCode';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-GLOBALBTY-active.svg';
import couponButtonSrc from './coupon-btn-GLOBALBTY.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210907: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 8, 17, 4)) { // September 17 at 00:00 (04:00 UTC)
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
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'GB', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'GLOBALBTY' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#d1bba3', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>FREE Global Beauty Workshop</ModalHeader>
          <ModalBody>
            <p>Enroll in QC&apos;s <strong>Master Makeup Artistry</strong> course and use promo code <PromoCode>BCK2S</PromoCode> to get the <strong>Global Beauty Workshop</strong> for FREE.</p>
            <hr />
            <p>QC&apos;s Master Makeup Artistry course comes with a FREE makeup kit you&apos;ll use to excel in your course and your career.</p>
            <div className="text-center">
              <img src={require('./popup-makeup-kit.jpg').default} alt="makeup kit" />
            </div>
            <p>In the Global Beauty Workshop, you&apos;ll advance the  makeup skills you learned in your Master Makeup Artistry course!</p>
            <ul>
              <li>Get even more practice working with all different skin tones</li>
              <li>Create gorgeous makeup looks from different cultural and religious traditions around the world</li>
              <li>Learn how to create beautiful henna designs for brides</li>
              <li>+ BONUS Makeup Kit &amp; henna paste!</li>
            </ul>
          </ModalBody>
          <ModalFooter>
            <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. You will receive a different, course-specific makeup starter kit with all other QC Makeup Academy courses instead of the one shown.</div>
          </ModalFooter>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#d1bba3' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'GLOBALBTY'
            ? <img src={couponButtonAppliedSrc} width="352" height="57" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="352" height="57" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
