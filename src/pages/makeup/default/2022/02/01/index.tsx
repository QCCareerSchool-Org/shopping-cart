import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2022, 1, 8, 5, 0)); // February 8 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2022, 1, 14, 5)); // February 14 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 1, 15, 5)); // February 15 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20220201 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 1, 10, 5)) { // February 10 at 00:00 (05:00 UTC)
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
      <section id="promoSection" style={{ backgroundColor: '#f794a6', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <h6 className="mb-3">Special Valentine&apos;s Day Offer</h6>
            <p>It&apos;s the season of love and we&apos;re celebrating with an exclusive gift for new students! When you enroll in the <strong>Master Makeup Artistry</strong> course, you&apos;ll get the new Valentine Makeup Kit FREE.</p>
            <p>This kit comes with everything you need to start your career as a professional MUA including</p>
            <ul>
              <li>an 88-shade eye shadow palette</li>
              <li>a 20-shade conceal &amp; correct palette</li>
              <li>a 32-shade lip palette</li>
              <li>a 12-piece brush set</li>
              <li>and more!</li>
            </ul>
            <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./popup-makeup-kit.jpg')} className="img-fluid" /></div>
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
