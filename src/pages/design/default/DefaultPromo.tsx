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

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;
  let backgroundColor: string;
  let popupContent: React.ReactNode;
  let popupTitle: string;

  if (date >= new Date('2021-03-10T12:00:00-05:00')) { // March promotion ending
    backgroundColor = '#ededed';
    popupTitle = 'Special Offer';
    popupContent = <p>Enroll in one of QC’s design courses and receive ANY second course for free!</p>;
    if (desktop) {
      image = require('./2021/03/desktop-ends.jpg');
      width = 1257;
      height = 532;
    } else {
      image = require('./2021/03/mobile-ends.jpg');
      width = 514;
      height = 416;
    }
  } else if (date >= new Date('2021-03-02T08:00:00-05:00')) { // March promotion
    backgroundColor = '#ededed';
    popupTitle = 'Special Offer';
    popupContent = <p>Enroll in one of QC’s design courses and receive ANY second course for free!</p>;
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./2021/03/desktop-uk.jpg') : require('./2021/03/desktop.jpg');
      width = 1257;
      height = 532;
    } else {
      image = currencyCode === 'GBP' ? require('./2021/03/mobile-uk.jpg') : require('./2021/03/mobile.jpg');
      width = 514;
      height = 416;
    }
  } else if (date >= new Date('2021-02-28T08:00:00-05:00')) { // weekend popup ending
    backgroundColor = '#d0171f';
    popupTitle = 'Limited-Time Offer';
    popupContent = <p>Until March 1st, enroll in one of QC’s design courses and you&apos;ll receive a FREE leather portfolio. Plus, get ANY second course for free (of equal or lesser value).</p>;
    if (desktop) {
      image = require('./2021/02/weekend-popup/desktop-ends.jpg');
      width = 1257;
      height = 532;
    } else {
      image = require('./2021/02/weekend-popup/mobile-ends.jpg');
      width = 514;
      height = 416;
    }
  } else if (date >= new Date('2021-02-27T08:00:00-05:00')) { // weekend popup
    backgroundColor = '#d0171f';
    popupTitle = 'Limited-Time Offer';
    popupContent = <p>Until March 1st, enroll in one of QC’s design courses and you&apos;ll receive a FREE leather portfolio. Plus, get ANY second course for free (of equal or lesser value).</p>;
    if (desktop) {
      image = require('./2021/02/weekend-popup/desktop.jpg');
      width = 1257;
      height = 532;
    } else {
      image = require('./2021/02/weekend-popup/mobile.jpg');
      width = 514;
      height = 416;
    }
  } else if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    backgroundColor = '#b4b4b4';
    popupTitle = 'Special Offer';
    popupContent = <p>Enroll in one of QC’s design courses and receive ANY second course for free (of equal or lesser value).</p>;
    if (desktop) {
      image = require('./2021/02/desktop-ends.jpg');
      width = 1257;
      height = 532;
    } else {
      image = require('./2021/02/mobile-ends.jpg');
      width = 514;
      height = 416;
    }
  } else {
    backgroundColor = '#b4b4b4';
    popupTitle = 'Special Offer';
    popupContent = <p>Enroll in one of QC’s design courses and receive ANY second course for free (of equal or lesser value).</p>;
    if (desktop) {
      image = require('./2021/02/desktop.jpg');
      width = 1257;
      height = 532;
    } else {
      image = require('./2021/02/mobile.jpg');
      width = 514;
      height = 416;
    }
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
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

  function handlePromoClick(event: React.MouseEvent) {
    event.preventDefault();
    togglePopup();
  }
};
