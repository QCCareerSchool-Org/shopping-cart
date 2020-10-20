import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDate } from '../../../hooks/useDateContext';
import { usePopup } from '../../../hooks/usePopup';
import { dateOverride } from '../../../lib/dateOverride';

import desktopEnds from './desktop-ends.jpg';
import desktop from './desktop.jpg';
import mobileEnds from './mobile-ends.jpg';
import mobile from './mobile.jpg';

export const DefaultPromo: React.FC = () => {
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);

  const date = dateOverride() || serverDate;

  const endsNow = date >= new Date('2020-10-29T00:00:00-04:00');
  const desktopImage = endsNow ? desktopEnds : desktop;
  const mobileImage = endsNow ? mobileEnds : mobile;
  const popupTitle = 'Special Offer';
  const backgroundColor = '#ffaa08';

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container">
        <div className="d-none d-lg-block text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={desktopImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
        <div className="d-block d-lg-none text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>{popupTitle}</ModalHeader>
        <ModalBody className="text-center">
          <p className="my-5">Enroll in one foundation course&mdash;with our lowest deposit ever&mdash;and get a FREE Advanced or Specialty Course. Plus, receive a FREE Virtual Events Training.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
