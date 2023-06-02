import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 5, 9, 4)); // June 9 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 5, 9, 4)); // June 9 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 5, 13, 4)); // June 13 at 00:00 (04:00 UTC)
const backgroundColor = '#f4f4f4';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1060, 541 ] : [ 600, 656 ];

  if (lastChance) {
    const image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg')
      : currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop
    ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const MakeupPromo20230605 = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>FREE Pro Makeup Workshop</ModalHeader>
          <ModalBody>
            <p>Enroll in <strong>Master Makeup Artistry</strong> and get the <strong>Pro Makeup Workshop</strong> FREE! When you pay in full, you&apos;ll also get the entire Deluxe Collection!</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./enrollment-pop-up.jpg')} width="650" height="1056" className="img-fluid" /></div>
          </ModalBody>
          <ModalFooter>
            <p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p>
            <p className="small mb-0">The DELUXE kit is not required for you to complete your assignments and will not determine your success in the course.</p>
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
        message={<span style={{ textTransform: 'uppercase' }}><strong>Last chance!</strong> Get the Pro Makeup Workshop FREE!</span>}
      />
    </>
  );
};