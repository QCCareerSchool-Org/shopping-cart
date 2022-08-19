import React, { ReactElement, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const lastChanceGraphicsDate = new Date(Date.UTC(2022, 8, 2, 4)); // September 2 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2022, 8, 1, 4)); // September 1 at 00:00 (04:00 UTC)

type Props = {
  date: Date;
};

export const Promo20220824 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2022, 8, 3, 4)) {
      return new Date(Date.UTC(2022, 8, 10, 4)); // September 10 at 00:00 (04:00 UTC)
    }
    return new Date(Date.UTC(2022, 8, 3, 4)); // September 3 at 00:00 (04:00 UTC)
  }, [ date ]);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= lastChanceGraphicsDate.getTime()) {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 500;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#5f717b', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="md" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Back to School Offer</ModalHeader>
          <ModalBody>
            <p className="lead">Ready to start your event planning career?</p>
            <p className="lead">Enroll in any foundation course and get TWO speciality courses for free.</p>
            <p className="lead">This means you&apos;ll graduate with three professional certifications for the price of one!</p>
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
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>Back to School</strong> offer <strong className="endHighlight">ends {date.getTime() >= timerEndDate.getTime() - (1000 * 60 * 60 * 24) ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
