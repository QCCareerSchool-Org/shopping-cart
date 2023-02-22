import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceGraphicsDate = new Date(Date.UTC(2023, 2, 2, 5)); // March 2 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 2, 5)); // March 2 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 2, 9, 5)); // March 9 at 00:00 (05:00 UTC)

const backgroundColor = '#49d4f1';

export const PetPromo20230222: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= lastChanceGraphicsDate.getTime()) {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 960;
    height = 400;
  } else {
    width = 418;
    height = 570;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="md" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get {price?.currency.code === 'GBP' ? '£150' : '$200'} off your tuition!</ModalHeader>
          <ModalBody>
            <p className="lead mb-0">Enroll and get {price?.currency.code === 'GBP' ? '£150' : '$200'} off your tuition! You can get started today for only {price?.currency.code === 'GBP' ? '£99' : '$99'}!</p>
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
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> Get {price?.currency.code === 'GBP' ? '£150' : '$200'} off your tuition!</>}
      />
    </>
  );
};
