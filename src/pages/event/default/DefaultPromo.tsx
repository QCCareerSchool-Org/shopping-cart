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

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;
  let backgroundColor: string;
  let popupTitle: string;
  let popupContent: React.ReactNode;

  if (date >= new Date('2021-03-10T12:00:00-05:00')) { // march promotion ending
    backgroundColor = '#041f28';
    popupTitle = 'Special Offer';
    popupContent = <p className="my-5">Enroll in one foundation course&mdash;with our lowest deposit ever&mdash;and get a FREE Specialty Course.</p>;
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./2021/03/desktop-uk-ends.jpg') : require('./2021/03/desktop-ends.jpg');
      width = 976;
      height = 500;
    } else {
      image = currencyCode === 'GBP' ? require('./2021/03/mobile-uk-ends.jpg') : require('./2021/03/mobile-ends.jpg');
      width = 440;
      height = 500;
    }
  } else if (date >= new Date('2021-03-02T08:00:00-05:00')) { // march promotion
    backgroundColor = '#041f28';
    popupTitle = 'Special Offer';
    popupContent = <p className="my-5">Enroll in one foundation course&mdash;with our lowest deposit ever&mdash;and get a FREE Specialty Course.</p>;
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./2021/03/desktop-uk.jpg') : require('./2021/03/desktop.jpg');
      width = 976;
      height = 500;
    } else {
      image = currencyCode === 'GBP' ? require('./2021/03/mobile-uk.jpg') : require('./2021/03/mobile.jpg');
      width = 440;
      height = 500;
    }
  } else if (date >= new Date('2021-03-01T08:00:00-05:00')) { // weekend popup offer ending
    backgroundColor = '#2b0a11';
    popupTitle = 'Limited Time Offer';
    popupContent = <p className="my-5">Until March 1st, receive a FREE leather portfolio when you enroll in any course. Plus, when you enroll in one of QC’s foundation courses&mdash;at our lowest deposit ever&mdash;you&apos;ll get a specialty course for free (of equal or lesser value).</p>;
    if (desktop) {
      image = require('./2021/02/weekend-popup/desktop-ends.jpg');
      width = 976;
      height = 500;
    } else {
      image = require('./2021/02/weekend-popup/mobile-ends.jpg');
      width = 440;
      height = 414;
    }
  } else if (date >= new Date('2021-02-27T08:00:00-05:00')) { // weekend popup offer
    backgroundColor = '#2b0a11';
    popupTitle = 'Limited Time Offer';
    popupContent = <p className="my-5">Until March 1st, receive a FREE leather portfolio when you enroll in any course. Plus, when you enroll in one of QC’s foundation courses&mdash;at our lowest deposit ever&mdash;you&apos;ll get a specialty course for free (of equal or lesser value).</p>;
    if (desktop) {
      image = require('./2021/02/weekend-popup/desktop.jpg');
      width = 976;
      height = 500;
    } else {
      image = require('./2021/02/weekend-popup/mobile.jpg');
      width = 440;
      height = 414;
    }
  } else if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    backgroundColor = '#8ef0c0';
    popupTitle = 'Special Offer';
    popupContent = <p className="my-5">Enroll in one foundation course&mdash;with our lowest deposit ever&mdash;and get a FREE Advanced or Specialty Course.</p>;
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./2021/02/desktop-uk-ends.jpg') : require('./2021/02/desktop-ends.jpg');
      width = 976;
      height = 500;
    } else {
      image = currencyCode === 'GBP' ? require('./2021/02/mobile-uk-ends.jpg') : require('./2021/02/mobile-ends.jpg');
      width = 440;
      height = 500;
    }
  } else {
    backgroundColor = '#8ef0c0';
    popupTitle = 'Special Offer';
    popupContent = <p className="my-5">Enroll in one foundation course&mdash;with our lowest deposit ever&mdash;and get a FREE Advanced or Specialty Course.</p>;
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./2021/02/desktop-uk.jpg') : require('./2021/02/desktop.jpg');
      width = 976;
      height = 500;
    } else {
      image = currencyCode === 'GBP' ? require('./2021/02/mobile-uk.jpg') : require('./2021/02/mobile.jpg');
      width = 440;
      height = 500;
    }
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>{popupTitle}</ModalHeader>
        <ModalBody className="text-center">
          {popupContent}
        </ModalBody>
      </Modal>
    </section>
  );
};
