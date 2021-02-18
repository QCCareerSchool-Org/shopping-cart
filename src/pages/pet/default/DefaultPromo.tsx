import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useDate } from '../../../hooks/useDateContext';

import { dateOverride } from '../../../lib/dateOverride';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

type Props = {
  countryCode: string;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ countryCode, currencyCode }) => {
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 518;

  let desktopImage;
  let mobileImage;

  if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    desktopImage = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    mobileImage = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
  } else if (date >= new Date('2021-02-16T08:00:00-05:00')) {
    desktopImage = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    mobileImage = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  } else if (date >= new Date('2021-02-10T12:00:00-05:00')) {
    desktopImage = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    mobileImage = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
  } else {
    desktopImage = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    mobileImage = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#12222b', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={desktop ? desktopImage : mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Your Dog Grooming Kit</ModalHeader>
        <ModalBody className="text-center p-0">
          <img src={require('./pop-up.jpg')} className="img-fluid" alt="promotion details" />
        </ModalBody>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent) {
    event.preventDefault();
    togglePopup();
  }
};
