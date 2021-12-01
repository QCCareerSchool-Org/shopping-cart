import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2021, 11, 11, 5)); // December 11 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2021, 11, 17, 5)); // December 17 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2021, 11, 18, 5)); // December 18 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20211201 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 11, 16, 5)) { // December 16 at 00:00 (05:00 UTC)
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg').default : require('./desktop-ends.jpg').default;
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
    width = 1060;
    height = 633;
  } else {
    width = 600;
    height = 669;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#fcfcfc', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>FREE Skincare Course</ModalHeader>
          <ModalBody>
            <p>QC&apos;s Master Makeup Artistry Course lays the foundation for your makeup career. Your tuition also includes a FREE professional makeup kit to help you get started.</p>
            <p>With QC&apos;s built-in business training, you&apos;ll learn how to build the beauty empire you&apos;ve always dreamed of.</p>
            <p>QC&apos;s Skincare Course teaches you how to work with different skin types. You&apos;ll learn how to prepare your clients&apos; skin for flawless makeup applications. Plus, you&apos;ll be able to design skincare routines for them. This will add a huge revenue stream to your business!</p>
            <p>Graduate as both a Master International Makeup Professional&trade; (MIMP&trade;) and as a Certified Skincare Consultant&trade; in just a few months!</p>
            <p>Plus, you&apos;ll receive The 11-piece Luminous Collection to jumpstart your career.</p>
            <img src={require('./enrollment-pop-up.jpg').default} className="img-fluid" />
          </ModalBody>
          <ModalFooter>
            <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. You will receive a different, course-specific makeup starter kit with all other QC Makeup Academy courses instead of the one shown.</div>
          </ModalFooter>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        className="text-white"
        style={{ backgroundColor: '#000' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>free Skincare course</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
