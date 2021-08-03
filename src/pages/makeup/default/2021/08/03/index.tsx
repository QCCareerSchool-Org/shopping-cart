import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { PromoCode } from '../../../../../../components/PromoCode';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './coupon-btn-VIP2021-active.svg';
import couponButtonSrc from './coupon-btn-VIP2021.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20210803: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 7, 12, 4)) { // August 12 at 00:00 (04:00 GMT)
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
    width = 976;
    height = 527;
  } else {
    width = 600;
    height = 487;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'VIP2021' });
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
          <ModalHeader toggle={togglePopup}>VIP Career Catalyst Workshop</ModalHeader>
          <ModalBody>
            <p>Get customized career guidance from QC&apos;s Celebrity Makeup Artist, Nathan Johnson.</p>
            <p>Here&apos;s what&apos;s included:</p>
            <ul>
              <li>A 25-minute Google Meet career mentoring session with Nathan.</li>
              <li>A lesson on how to create the perfect elevator pitch to help you land your dream job.</li>
              <li>A personalized reference letter from Nathan.</li>
            </ul>
            <p>This workshop, coupled with your <strong>Master Makeup Artistry</strong> course, will give you exactly what you need to take the industry by storm!</p>

            <p>Select the <strong>Master Makeup Artistry</strong> course and use promo code <PromoCode>VIP2021</PromoCode> to get the <strong>VIP Career Catalyst Workshop</strong></p>
          </ModalBody>
          <ModalFooter className="justify-content-start">
            <div>You are eligible for your call with Nathan after you have completed the <strong>Master Makeup Artistry</strong> course</div>
            <div>You must achieve a minimum B grade average to receive a reference letter</div>
          </ModalFooter>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#fff' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'VIP2021'
            ? <img src={couponButtonAppliedSrc} width="352" height="57" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="352" height="57" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
