import React, { FC, PropsWithChildren, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)

const backgroundColor = '#819076';

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

export const DesignPromo20230322: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2023, 3, 1, 4)) {
      return new Date(Date.UTC(2023, 3, 3, 4)); // April 3 at 00:00 (04:00 UTC)
    }
    return new Date(Date.UTC(2023, 3, 1, 4)); // April 1 at 00:00 (04:00 UTC)
  }, [ date ]);

  const desktop = screenWidth >= 514;

  const { image, width, height } = getImageData(desktop, date.getTime() >= lastChanceDate.getTime(), price?.currency.code);

  const [ promoDiscount, getStarted, fullDiscount ] = price?.currency.code === 'GBP'
    ? [ '£75', '£40', '£150' ]
    : [ '$100', '$75', '$300' ];

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <Container desktop={desktop}>
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </Container>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get {promoDiscount} off your tuition!</ModalHeader>
          <ModalBody>
            <p>Enroll in any online design course and get {promoDiscount} off your tuition! You can get started today for only {getStarted} or save up to {fullDiscount} when you pay in full!</p>
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
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> Get {promoDiscount} off your tuition!</>}
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
