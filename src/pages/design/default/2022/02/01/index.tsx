import { audCountry, gbpCountry, nzdCountry } from '@qccareerschool/helper-functions';
import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2022, 1, 8, 5, 0)); // February 8 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2022, 1, 14, 5)); // February 14 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 1, 15, 5)); // February 15 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

const potentialSavings = (countryCode: string): string => {
  return gbpCountry(countryCode) ? '£1098' : audCountry(countryCode) ? '$1998' : nzdCountry(countryCode) ? '$2148' : '$1498';
};

export const Promo20220201 = ({ date }: Props): ReactElement => {
  const { address, price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 1, 10, 5)) { // February 10 at 00:00 (05:00 UTC)
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg');
    } else {
      image = require('./mobile.jpg');
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
      <section id="promoSection" style={{ backgroundColor: '#616773', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <h6 className="mb-3">Special February Offer</h6>
            <p>It&apos;s the season of love and we&apos;re celebrating with a special offer for new students!</p>
            <p>Enroll in any design course and get a second course absolutely free. This means you can graduate with two professional certifications and save up to {potentialSavings(address.countryCode)}.</p>
            <p>Get started for only {price?.currency.code === 'GBP' ? '£75' : '$75'}.</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        style={{ backgroundColor: 'black', color: 'white' }}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
