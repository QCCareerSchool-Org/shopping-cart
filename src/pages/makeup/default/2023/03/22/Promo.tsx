import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 3, 1, 4)); // April 1 at 00:00 (04:00 UTC)

const backgroundColor = '#151a20';

const getImageData = (desktop: boolean, lastChance: boolean): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1060, 633 ] : [ 600, 669 ];

  if (lastChance) {
    const image = desktop ? require('./desktop-ends.jpg') : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop ? require('./desktop.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const MakeupPromo20230322 = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  const { image, width, height } = getImageData(desktop, lastChanceDate.getTime() >= date.getTime());

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>FREE Global Beauty Workshop</ModalHeader>
          <ModalBody>
            <p>Enroll and get the Global Beauty Workshop FREE. Plus, we&apos;ll also send you the ENTIRE Luminous Collection!</p>
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
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> Get the Global Beauty Workshop FREE!</>}
      />
    </>
  );
};
