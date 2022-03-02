import React, { ReactElement, useMemo } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2022, 2, 7, 5, 0)); // March 7 at 00:00 (05:00 UTC)
// const timerLastChanceDate = new Date(Date.UTC(2022, 1, 25, 5)); // February 25 at 00:00 (05:00 UTC)
// const timerEndDate = new Date(Date.UTC(2022, 1, 26, 5)); // February 26 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20220301 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const timerLastChanceDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2022, 2, 12, 5)) { // March 12 at 00:00 (05:00 UTC)
      return new Date(Date.UTC(2022, 2, 13, 5)); // March 13 at 00:00 (05:00 UTC)
    }
    return new Date(Date.UTC(2022, 2, 11, 5)); // March 11 at 00:00 (05:00 UTC)
  }, [ date ]);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2022, 2, 12, 5)) { // March 12 at 00:00 (05:00 UTC)
      return new Date(Date.UTC(2022, 2, 14, 5)); // March 14 at 00:00 (05:00 UTC)
    }
    return new Date(Date.UTC(2022, 2, 12, 5)); // March 12 at 00:00 (05:00 UTC)
  }, [ date ]);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 2, 8, 14, 30)) { // March 8 at 09:30 (14:30 UTC)
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
      <section id="promoSection" style={{ backgroundColor: '#a5a5a5', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special March Offer</ModalHeader>
          <ModalBody>
            <p>Enroll in Master Makeup Artistry and choose any advanced course FREE.</p>
            <p>Plus, when you enroll, we&apos;ll send you the entire Luminous Collection!</p>
            <p>This makeup kit comes with everything you need to start your career as a professional MUA including</p>
            <ul>
              <li>an 88-shade eye shadow palette</li>
              <li>a 20-shade conceal &amp; correct palette</li>
              <li>a 32-shade lip palette</li>
              <li>a 12-piece brush set</li>
              <li>and more!</li>
            </ul>
            <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./enrollment-pop-up.jpg')} className="img-fluid" /></div>
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
        message={<span style={{ textTransform: 'uppercase' }}>This special offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
