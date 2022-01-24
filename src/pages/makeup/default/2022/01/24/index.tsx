import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2022, 0, 24, 14, 30)); // January 24 at 09:00 (14:30 UTC)
const timerLastChanceDate = new Date(Date.UTC(2022, 0, 31, 5)); // January 31 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 1, 1, 5)); // February 1 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20220124 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 0, 27, 5)) { // January 27 at 00:00 (05:00 UTC)
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
    width = 1060;
    height = 633;
  } else {
    width = 600;
    height = 669;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#f1d6cd', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special New Year Offer</ModalHeader>
          <ModalBody>
            <p>When you enroll in Master Makeup Artistry, you&apos;ll get the Pro Makeup Workshop FREE!</p>
            <p>Once you enroll, we&apos;ll also send you the entire New Year Makeup Kit with everything you need to start your career as a professional MUA. Your kit includes:</p>
            <ul>
              <li>an 88-shade eye shadow palette</li>
              <li>a 20-shade conceal &amp; correct palette</li>
              <li>a 32-shade lip palette</li>
              <li>a 12-piece brush set</li>
              <li>and more!</li>
            </ul>
            <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build the beauty empire of your dreams.</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./enrollment-pop-up-no-applicator.jpg')} className="img-fluid" /></div>
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
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>New Year</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
