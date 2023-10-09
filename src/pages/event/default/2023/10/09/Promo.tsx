import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 9, 12, 4)); // October 12 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 9, 12, 4)); // October 12 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 9, 16, 4)); // October 30 at 00:00 (04:00 UTC)
const backgroundColor = '#f5f5f5';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: string; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 976, 500 ] : [ 440, 500 ];

  if (lastChance) {
    const image = desktop
      ? require('./desktop-ends.jpg')
      : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop
    ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const EventPromo20231009: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 440;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate, price?.currency.code);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Graduate with Specialty Certifications</ModalHeader>
          <ModalBody>
            <p className="mb-0"> For a limited time, enroll in any foundation course and get TWO specialty courses free!</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        buttonInverse={true}
        className="text-white"
        style={{ backgroundColor: 'black' }}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE!</strong> This exclusive offer ends soon!</span>}
      />
    </>
  );
};
