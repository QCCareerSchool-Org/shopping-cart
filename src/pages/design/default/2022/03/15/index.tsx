import { audCountry, gbpCountry, nzdCountry } from '@qccareerschool/helper-functions';
import React, { ReactElement, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2022, 2, 21, 4)); // March 21 at 00:00 (04:00 UTC)
// const timerLastChanceDate = new Date(Date.UTC(2022, 1, 25, 5)); // February 25 at 00:00 (05:00 UTC)
// const timerEndDate = new Date(Date.UTC(2022, 1, 26, 5)); // February 26 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

const potentialSavings = (countryCode: string): string => {
  return gbpCountry(countryCode) ? '£1298' : audCountry(countryCode) ? '$1849' : nzdCountry(countryCode) ? '$1849' : '$1698';
};

export const Promo20220315 = ({ date }: Props): ReactElement => {
  const { address, price } = useStateContext();
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
    width = 1257;
    height = 575;
  } else {
    width = 514;
    height = 486;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#aea4a3', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special March Offer</ModalHeader>
          <ModalBody>
            <p>Ready to start your home design career?</p>
            <p>Enroll in any design course and get a second certification course for FREE! This means you could save up to {potentialSavings(address.countryCode)} on your tuition.</p>
            <p>Get started for only {price?.currency.code === 'GBP' ? '£40' : '$79'}.</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        style={{ backgroundColor: '#000', color: 'white' }}
        message={<span style={{ textTransform: 'uppercase' }}>This special offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
