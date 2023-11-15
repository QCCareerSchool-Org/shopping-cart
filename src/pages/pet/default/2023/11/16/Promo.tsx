import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 10, 22, 5)); // November 22 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 10, 22, 5)); // November 22 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 10, 27, 5)); // November 27 at 00:00 (05:00 UTC)
const backgroundColor = '#000';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: string; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 960, 400 ] : [ 418, 570 ];

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

export const PetPromo20231116: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 418;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate, price?.currency.code);

  const [ promoDiscount, deposit ] = price?.currency.code === 'GBP'
    ? [ '£450', '£99' ]
    : [ '$400', '$99' ];

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="md" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Save on Your Tuition</ModalHeader>
          <ModalBody>
            <p className="lead mb-0">For a limited time, enroll in any pet course and get {promoDiscount} off your tuition!</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        buttonInverse={true}
        className="text-black"
        style={{ backgroundColor: '#53b8cc' }}
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> This exclusive offer ends soon!</>}
      />
    </>
  );
};
