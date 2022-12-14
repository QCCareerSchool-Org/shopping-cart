import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceGraphicsDate = new Date(Date.UTC(2023, 0, 24, 5)); // January 24 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 0, 24, 5)); // January 24 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 0, 28, 5)); // January 28 at 00:00 (05:00 UTC)

const backgroundColor = '#151a20';

export const MakeupPromo20230118 = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= lastChanceGraphicsDate.getTime()) {
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
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <p className="lead">Take your makeup business to the next level!</p>
            <p className="lead">Enroll in <strong>Master Makeup Artistry</strong> &amp; get the <strong>Pro Makeup Workshop</strong> free.</p>
            <p className="lead">Plus, we&apos;ll also send you the entire Luminous makeup collection!</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./enrollment-pop-up.jpg')} className="img-fluid" /></div>
          </ModalBody>
          <ModalFooter>
            <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. Your kit will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</div>
          </ModalFooter>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        buttonInverse={true}
        className="text-white"
        style={{ backgroundColor: 'black' }}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer <strong className="endHighlight">ends {date.getTime() >= timerEndDate.getTime() - (1000 * 60 * 60 * 24) ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
