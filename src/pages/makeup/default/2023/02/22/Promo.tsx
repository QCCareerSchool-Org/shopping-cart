import React, { ReactElement, useMemo } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceGraphicsDate = new Date(Date.UTC(2023, 2, 2, 5)); // March 2 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 2, 5)); // March 2 at 00:00 (05:00 UTC)

const backgroundColor = '#fcfcfc';

export const MakeupPromo20230222 = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2023, 2, 9, 5)) { // March 9 at 00:00 (05:00 UTC)
      return new Date(Date.UTC(2023, 2, 11, 5)); // March 11 at 00:00 (05:00 UTC)
    }
    return new Date(Date.UTC(2023, 2, 9, 5)); // March 9 at 00:00 (05:00 UTC)
  }, [ date ]);

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
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>FREE Skincare Course</ModalHeader>
          <ModalBody>
            <p>Enroll and get the Skincare Course FREE. Plus, we&apos;ll also send you the ENTIRE Luminous Collection!</p>
            <div style={{ display: 'flex', justifyContent: 'center', margin: -16 }}><img src={require('./enrollment-pop-up.jpg')} width="700" height="1519" className="img-fluid" /></div>
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
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> Get the Skincare Course FREE!</>}
      />
    </>
  );
};
