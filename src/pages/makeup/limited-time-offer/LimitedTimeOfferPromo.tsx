/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

export const LimitedTimeOfferPromo: React.FC = () => {
  const screenWidth = useScreenWidthContext();

  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 756;

  return (
    <section id="promoSection" style={{ padding: 0 }}>
      <div className="container">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}>
            <img src={desktop ? require('./desktop.jpg') : require('./mobile.jpg')} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>35-Year Anniversary Makeup Kit</ModalHeader>
        <ModalBody className="text-center">
          <img src={require('./popup.jpg')} className="img-fluid" alt="Makeup Kit" />
        </ModalBody>
        <ModalFooter>
          <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. Your kit will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</div>
        </ModalFooter>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent): void {
    event.preventDefault();
    togglePopup();
  }
};
