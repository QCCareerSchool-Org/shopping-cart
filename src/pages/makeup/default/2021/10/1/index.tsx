import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { PromoCode } from '../../../../../../components/PromoCode';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

export const Promo20211001: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 9, 29, 4)) { // October 29 at 00:00 (04:00 UTC)
    if (desktop) {
      image = price?.promoCode === 'ELITEPRO' ? require('./desktop-ends-active.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = price?.promoCode === 'ELITEPRO' ? require('./mobile-ends-active.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = price?.promoCode === 'ELITEPRO' ? require('./desktop-active.jpg').default : require('./desktop.jpg').default;
    } else {
      image = price?.promoCode === 'ELITEPRO' ? require('./mobile-active.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 976;
    height = 563;
  } else {
    width = 600;
    height = 669;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MW', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'ELITEPRO' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#8e765a', padding: 0 }}>
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
            <p>Enroll in <strong>Master Makeup Artistry</strong> and use promo code <PromoCode>ELITEPRO</PromoCode> to get the <strong>Pro Makeup Workshop</strong>{date.getTime() <= Date.UTC(2021, 9, 16, 4) && <> and <u>an extra set of false eyelashes</u></>} FREE!</p>
            <p>You&apos;ll also get the Elite Makeup Kit.</p>
            <img src={require('./enrollment-pop-up.jpg').default} className="img-fluid" />
          </ModalBody>
          <ModalFooter>
            <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. You will receive a different, course-specific makeup starter kit with all other QC Makeup Academy courses instead of the one shown.</div>
          </ModalFooter>
        </Modal>
      </section>
      <CountDownTimerWrapper date={date} endDate={new Date(Date.UTC(2021, 9, 30, 4))} className="text-white" style={{ backgroundColor: '#8e765a' }} />
      <div className="text-white" style={{ backgroundColor: '#8e765a' }}>
        <div className="container py-3 d-flex justify-content-center">
          <button onClick={togglePopup} className="btn btn-secondary">VIEW OFFER DETAILS</button>
        </div>
      </div>
    </>
  );
};
