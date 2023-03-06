import React, { FC, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 2, 2, 5)); // March 2 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 2, 5)); // March 2 at 00:00 (05:00 UTC)

const backgroundColor = '#fff';

export const DesignPromo20230222: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2023, 2, 9, 5)) { // March 9 at 00:00 (05:00 UTC)
      return new Date(Date.UTC(2023, 2, 11, 5)); // March 11 at 00:00 (05:00 UTC)
    }
    return new Date(Date.UTC(2023, 2, 9, 5)); // March 9 at 00:00 (05:00 UTC)
  }, [ date ]);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= lastChanceDate.getTime()) {
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 1257;
    height = 542;
  } else {
    width = 514;
    height = 486;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get a FREE 2nd course!</ModalHeader>
          <ModalBody>
            <p>Enroll in any online design course and get a FREE second course of your choice.</p>
            <p className="mb-0">You can get started today for only {price?.currency.code === 'GBP' ? '£40' : '$75'} or save up to {price?.currency.code === 'GBP' ? '£150' : '$300'} when you pay in full!</p>
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
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> Get a FREE 2nd course when you enroll!</>}
      />
    </>
  );
};
