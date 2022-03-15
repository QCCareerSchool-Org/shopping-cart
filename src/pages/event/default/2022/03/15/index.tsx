import { audCountry, gbpCountry, nzdCountry } from '@qccareerschool/helper-functions';
import React, { ReactElement, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

const timerShowDate = new Date(Date.UTC(2022, 2, 21, 4)); // March 21 at 00:00 (04:00 UTC)
// const timerLastChanceDate = new Date(Date.UTC(2022, 1, 25, 5)); // February 25 at 00:00 (05:00 UTC)
// const timerEndDate = new Date(Date.UTC(2022, 1, 26, 5)); // February 26 at 00:00 (05:00 UTC)

const potentialSavings = (countryCode: string): string => {
  return gbpCountry(countryCode) ? '£1556' : audCountry(countryCode) ? '$2578' : nzdCountry(countryCode) ? '$2716' : '$2078';
};

export const Promo20220315 = ({ date }: Props): ReactElement => {
  const { price, address } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const timerLastChanceDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2022, 2, 26, 4)) { // March 26 at 00:00 (04:00 UTC)
      return new Date(Date.UTC(2022, 2, 28, 4)); // March 28 at 00:00 (04:00 UTC)
    }
    return new Date(Date.UTC(2022, 2, 25, 4)); // March 25 at 00:00 (04:00 UTC)
  }, [ date ]);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2022, 2, 26, 4)) { // March 26 at 00:00 (04:00 UTC)
      return new Date(Date.UTC(2022, 2, 29, 4)); // March 29 at 00:00 (04:00 UTC)
    }
    return new Date(Date.UTC(2022, 2, 26, 4)); // March 26 at 00:00 (04:00 UTC)
  }, [ date ]);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2022, 2, 23, 4)) { // March 23 at 00:00 (04:00 UTC)
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
      <section id="promoSection" style={{ backgroundColor: '#e4e4e4', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special March Offer</ModalHeader>
          <ModalBody>
            <p>Ready to start your event planning career?</p>
            <p>Enroll in any foundation course and get TWO speciality courses for free.</p>
            <p>This means you&apos;ll graduate with <strong>three</strong> professional certifications for the price of one (saving up to {potentialSavings(address.countryCode)} on your training!).</p>
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
