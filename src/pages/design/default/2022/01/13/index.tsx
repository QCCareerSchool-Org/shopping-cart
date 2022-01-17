import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2022, 0, 17, 5)); // January 17 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2022, 0, 23, 5)); // January 23 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 0, 24, 5)); // January 24 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20220113 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 0, 19, 5)) { // January 19 at 00:00 (05:00 UTC)
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
    height = 575;
  } else {
    width = 514;
    height = 486;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#9b9c9e', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Your Special Holiday Offer</ModalHeader>
          <ModalBody>
            <p>Enroll in any Design course and get started for only {price?.currency.code === 'GBP' ? '£30' : '$49'}, followed by low monthly payments.</p>
            <p>Prefer to pay in full? You can save up to {price?.currency.code === 'GBP' ? '£300' : '$400'} off your tuition for our most popular courses.</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        style={{ backgroundColor: '#866b55', color: '#e4e4e6' }}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
