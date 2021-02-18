import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDate } from '../../../hooks/useDateContext';
import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../lib/dateOverride';

export const DefaultPromo: React.FC = () => {
  const screenWidth = useScreenWidthContext();
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 514;

  let desktopImage;
  let mobileImage;

  if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    desktopImage = require('./desktop-ends.jpg');
    mobileImage = require('./mobile-ends.jpg');
  } else if (date >= new Date('2021-02-16T08:00:00-05:00')) {
    desktopImage = require('./desktop.jpg');
    mobileImage = require('./mobile.jpg');
  } else if (date >= new Date('2021-02-15T00:00:00-05:00')) {
    desktopImage = require('./valentines/desktop-ends.jpg');
    mobileImage = require('./valentines/mobile-ends.jpg');
  } else if (date >= new Date('2021-02-13T09:00:00-05:00')) {
    desktopImage = require('./valentines/desktop.jpg');
    mobileImage = require('./valentines/mobile.jpg');
  } else if (date >= new Date('2021-02-10T12:00:00-05:00')) {
    desktopImage = require('./desktop-ends.jpg');
    mobileImage = require('./mobile-ends.jpg');
  } else {
    desktopImage = require('./desktop.jpg');
    mobileImage = require('./mobile.jpg');
  }

  let bgColor;
  let footerContent;
  let modalTitle;
  if (date >= new Date('2021-02-13T09:00:00-05:00') && date < new Date('2021-02-16T08:00:00-05:00')) {
    bgColor = '#d0171f';
    footerContent = <p>Until February 15th, enroll in one of QC’s design courses and you&apos;ll receive a FREE leather portfolio. Plus, get ANY second course for free (of equal or lesser value).</p>;
    modalTitle = 'Limited Time Offer';
  } else {
    bgColor = '#b4b4b4';
    footerContent = <p>Enroll in one of QC’s design courses and receive ANY second course for free (of equal or lesser value).</p>;
    modalTitle = 'Special Offer';
  }

  return (
    <section id="promoSection" style={{ backgroundColor: bgColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={desktop ? desktopImage : mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>{modalTitle}</ModalHeader>
        <ModalBody className="text-center">
          {footerContent}
        </ModalBody>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent) {
    event.preventDefault();
    togglePopup();
  }
};
