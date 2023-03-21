import React, { FC, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 3, 1, 4)); // April 1 at 00:00 (04:00 UTC)

const backgroundColor = 'black';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 960, 430 ] : [ 518, 566 ];

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

export const PetPromo20230322: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  const { image, width, height } = getImageData(desktop, lastChanceDate.getTime() >= date.getTime(), price?.currency.code);

  const [ promoDiscount, getStarted ] = price?.currency.code === 'GBP'
    ? [ '£300', '£99' ]
    : [ '$300', '$99' ];

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="md" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get {promoDiscount} off your tuition!</ModalHeader>
          <ModalBody>
            <p className="lead mb-0">Enroll and get {promoDiscount} off your tuition! You can get started today for only {getStarted}!</p>
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
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> Get {promoDiscount} off your tuition!</>}
      />
    </>
  );
};
