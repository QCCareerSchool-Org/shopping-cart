import React, { FC, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 4, 25, 4)); // May 25 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 4, 25, 4)); // May 25 at 00:00 (04:00 UTC)
const backgroundColor = '#000';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 960, 430 ] : [ 518, 566 ];

  if (lastChance) {
    const image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg')
      : currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop
    ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const PetPromo20230522: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 571;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate, price?.currency.code);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2023, 4, 29, 4)) {
      return new Date(Date.UTC(2023, 5, 1, 4));
    }
    return new Date(Date.UTC(2023, 4, 29, 4)); // May 29 at 00:00 (04:00 UTC)
  }, [ date ]);

  const [ promoDiscount, getStarted ] = price?.currency.code === 'GBP'
    ? [ '£300', '£100' ]
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
