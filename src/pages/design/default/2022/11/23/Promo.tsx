import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceGraphicsDate = new Date(Date.UTC(2022, 10, 29, 5)); // November 29 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2022, 10, 29, 5)); // November 29 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 11, 3, 5)); // December 3 at 00:00 (05:00 UTC)

const backgroundColor = '#181516';

export const DesignPromo20221123: FC = () => {
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
      image = price?.currency.code === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
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
          <ModalHeader toggle={togglePopup}>Special Black Friday Offer!</ModalHeader>
          <ModalBody>
            <p>Enroll in any online design course and get a FREE second course of your choice.</p>
            <p>That&apos;s not all: to celebrate Black Friday, we&apos;ll also give you {price?.currency.code === 'GBP' ? '£75' : '$100'} off your tuition!</p>
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
        message={<span style={{ textTransform: 'uppercase' }}>This Black Friday offer <strong className="endHighlight">ends {date.getTime() >= timerEndDate.getTime() - (1000 * 60 * 60 * 24) ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
