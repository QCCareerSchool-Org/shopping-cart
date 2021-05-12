import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';

import popupImg from './deluxe-kit-popup.jpg';
import desktop from './desktop.jpg';
import mobile from './mobile.jpg';

export const DeluxeKitPromo: React.FC = () => {
  const [ popup, togglePopup ] = usePopup(false);

  return (
    <section id="promoSection" style={{ padding: 0 }}>
      <div className="container">
        <div className="d-none d-lg-block text-center">
          <button className="btn btn-link p-0 btn-no-hover-shadow" onClick={handlePromoClick}>
            <img src={desktop} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <div className="d-block d-lg-none text-center">
          <button className="btn btn-link p-0 btn-no-hover-shadow" onClick={handlePromoClick}>
            <img src={mobile} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>35-Year Anniversary Makeup Kit</ModalHeader>
        <ModalBody className="text-center">
          <img src={popupImg} className="img-fluid" alt="Makeup Kit" />
        </ModalBody>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent): void {
    event.preventDefault();
    togglePopup();
  }
};
