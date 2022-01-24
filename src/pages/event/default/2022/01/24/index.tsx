import { audCountry, gbpCountry, nzdCountry } from '@qccareerschool/helper-functions';
import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

const timerShowDate = new Date(Date.UTC(2022, 0, 24, 14, 30)); // January 24 at 09:00 (14:30 UTC)
const timerLastChanceDate = new Date(Date.UTC(2022, 0, 31, 5)); // January 31 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 1, 1, 5)); // February 1 at 00:00 (05:00 UTC)

const potentialSavings = (countryCode: string): string => {
  return gbpCountry(countryCode) ? '£1556' : audCountry(countryCode) ? '$2578' : nzdCountry(countryCode) ? '$2716' : '$2078';
};

export const Promo20220124 = ({ date }: Props): ReactElement => {
  const { price, address } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 0, 27, 5)) { // January 27 at 00:00 (05:00 UTC)
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
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 500;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#020d20', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <h6>Customize Your Training</h6>
            <p>Enroll in any foundation course and get two specialty courses absolutely FREE! This means you can graduate with three professional certifications and save up to {potentialSavings(address.countryCode)} on your event planning training.</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        style={{ backgroundColor: '#9cffd1', color: '#020d20' }}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
