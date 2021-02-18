import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDate } from '../../../hooks/useDateContext';
import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../lib/dateOverride';

type Props = {
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ currencyCode }) => {
  const screenWidth = useScreenWidthContext();
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth >= 576;

  let image: string;
  if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
  } else if (date >= new Date('2021-02-16T08:00:00-05:00')) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  } else if (date >= new Date('2021-02-15T00:00:00-05:00')) {
    if (desktop) {
      image = require('./valentines/desktop-ends.jpg');
    } else {
      image = require('./valentines/mobile-ends.jpg');
    }
  } else if (date >= new Date('2021-02-13T09:00:00-05:00')) {
    if (desktop) {
      image = require('./valentines/desktop.jpg');
    } else {
      image = require('./valentines/mobile.jpg');
    }
  } else if (date >= new Date('2021-02-10T12:00:00-05:00')) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  let popupTitle;
  let backgroundColor;
  let modalContent;
  if (date >= new Date('2021-02-13T08:00:00-05:00') && date < new Date('2021-02-16T08:00:00-05:00')) {
    popupTitle = 'Limited Time Offer';
    backgroundColor = '#2b0b12';
    modalContent = (
      <>
        <p>Until February 15th, receive a FREE leather portfolio when you enroll in any course.</p>
        <p>Plus, when you enroll in one of QC’s foundation courses&mdash;at our lowest deposit ever&mdash;you&apos;ll get a specialty course for free (of equal or lesser value).</p>
      </>
    );
  } else {
    popupTitle = 'Special Offer';
    backgroundColor = '#8ef0c0';
    modalContent = <p className="my-5">Enroll in one foundation course&mdash;with our lowest deposit ever&mdash;and get a FREE Advanced or Specialty Course.</p>;
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>{popupTitle}</ModalHeader>
        <ModalBody className="text-center">
          {modalContent}
        </ModalBody>
      </Modal>
    </section>
  );
};
