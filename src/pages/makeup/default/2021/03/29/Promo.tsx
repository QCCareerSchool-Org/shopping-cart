import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImage } from '../../../../../../hooks/usePreloadImage';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { PromoCode } from '../../../../../../components/PromoCode';

import couponButtonSrc from './coupon-btn-foundit.svg';
import couponButtonAppliedSrc from './coupon-btn-foundit-over.svg';

type Props = {
  date: Date;
  currencyCode: string;
}

export const Promo20210329: React.FC<Props> = ({ date, currencyCode }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();
  const { meta: { promoCode } } = useStateContext();
  const dispatch = useDispatchContext();

  usePreloadImage(couponButtonAppliedSrc);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date('2021-04-04T12:00:00-04:00')) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 534;
  } else {
    width = 600;
    height = 746;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#d394fc', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody className="text-center p-0">
            <div className="p-2">
              <p>Get started today with our <strong>lowest deposit ever</strong>, followed by low monthly payments.</p>
              <p>Enter promo code <PromoCode>FOUNDIT</PromoCode> to get the <strong>Pro Makeup Workshop</strong> free when you also enroll in the <strong>Master Makeup Artistry Course</strong>.</p>
            </div>
            <img className="img-fluid" src={require('./popup-makeup-kit.jpg')} alt="Makeup Kit" />
          </ModalBody>
          <ModalFooter>
            <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. You will receive a different, course-specific makeup starter kit with all other QC Makeup Academy courses instead of the one shown.</div>
          </ModalFooter>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#d394fc' }}>
        <div className="container pb-3 d-flex justify-content-center">
          {promoCode === 'FOUNDIT'
            ? <img src={couponButtonAppliedSrc} width="399" height="62" className="img-fluid" alt="Promo Code" />
            : <button onClick={() => { dispatch({ type: 'SET_PROMO_CODE', payload: 'FOUNDIT' }); }} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="399" height="62" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
