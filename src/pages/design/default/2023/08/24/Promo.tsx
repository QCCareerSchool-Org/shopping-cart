import React, { FC, PropsWithChildren } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 8, 5, 4)); // September 5 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 8, 5, 4)); // September 5 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 8, 9, 4)); // September 9 at 00:00 (04:00 UTC)
const backgroundColor = '#417583';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1257, 542 ] : [ 514, 486 ];

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

export const DesignPromo20230824: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 400;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate, price?.currency.code);

  const discount = price?.currency.code === 'GBP' ? '£100' : '$100';

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <Container desktop={desktop}>
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </Container>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get a FREE second course + {discount} off!</ModalHeader>
          <ModalBody>
            <p className="mb-0">Enroll in any online design course and get your second course for free! Plus, get {discount} off your tuition!</p>
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
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> to claim your free course! Plus, get {discount} off your tuition!</span>}
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
