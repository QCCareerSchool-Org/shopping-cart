import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2021, 11, 31, 5)); // December 31 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2022, 0, 7, 5)); // January 7 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 0, 8, 5)); // January 8 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20211220 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 0, 4, 5)) { // January 4 at 00:00 (05:00 UTC)
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
    width = 1060;
    height = 633;
  } else {
    width = 600;
    height = 669;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#03010b', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Your Special Holiday Offer</ModalHeader>
          <ModalBody>
            <p>Enroll in <strong>Master Makeup Artistry</strong> and get QC&apos;s <strong>Pro Makeup Workshop</strong> for FREE!</p>
            <p>Plus, we&apos;re giving you an exclusive gift to celebrate the Holiday season. As soon as you enroll, we&apos;ll send you the 12-piece New Year Collection to jumpstart your makeup career.</p>
            <p>Graduate as a Master International Makeup Professional&trade; (MIMP&trade;) in just a few short months and build the beauty empire you&apos;ve always dreamed of.</p>
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
        message={<span style={{ textTransform: 'uppercase' }}>This holiday offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
