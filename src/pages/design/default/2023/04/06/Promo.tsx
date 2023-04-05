import React, { FC, PropsWithChildren } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 3, 10, 4)); // April 10 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 3, 10, 4)); // April 10 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 3, 15, 4)); // April 15 at 00:00 (04:00 UTC)
const backgroundColor = '#fff';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1257, 581 ] : [ 514, 486 ];

  if (lastChance) {
    const image = desktop ? require('./desktop-ends.jpg') : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop
    ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const DesignPromo20230406: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 400;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate, price?.currency.code);

  const [ getStarted, fullDiscount ] = price?.currency.code === 'GBP'
    ? [ '£40', '£150' ]
    : [ '$75', '$300' ];

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <Container desktop={desktop}>
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </Container>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get Your Second Course FREE!</ModalHeader>
          <ModalBody>
            <p>Enroll in any online design course and get your second course for free! You can get started today for only {getStarted} or save up to {fullDiscount} when you pay in full!</p>
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
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> to claim your free course!</span>}
      />
    </>
  );
};

const Container: FC<PropsWithChildren<{ desktop: boolean }>> = ({ desktop, children }) => {
  if (desktop) {
    return <div className="container text-center px-0">{children}</div>;
  }
  return <>{children}</>;
};
