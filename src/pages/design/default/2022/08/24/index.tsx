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

const maxSavings = (currencyCode: string): string => {
  switch (currencyCode) {
    case 'AUD':
      return '$1998';
    case 'NZD':
      return '$2148';
    case 'GBP':
      return '£1098';
    default:
      return '$1598';
  }
};

const getStarted = (currencyCode: string): string => {
  return currencyCode === 'GBP' ? '£40' : '$75';
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
    height = 581;
  } else {
    width = 514;
    height = 486;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#51493e', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="md" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Back to School Offer</ModalHeader>
          <ModalBody>
            <p className="lead">Ready to start your home design career?</p>
            {price && (
              <>
                <p className="lead">Enroll in any design course and get a second certification course for FREE! This means you could save up to {maxSavings(price.currency.code)} on your tuition.</p>
                <p className="lead">Get started for only {getStarted(price.currency.code)}.</p>
              </>
            )}
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
