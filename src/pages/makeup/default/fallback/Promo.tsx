import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../hooks/useScreenWidthContext';

const backgroundColor = 'black';

export const MakeupFallbackPromo = (): ReactElement => {
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
    width = 1060;
    height = 489;
  } else {
    image = require('./mobile.jpg');
    width = 600;
    height = 690;
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>DELUXE Collection</ModalHeader>
        <ModalBody>
          <p>Get the entire <strong>DELUXE Kit with 17-piece brush set</strong> when you enroll in <strong>Master Makeup Artistry</strong> and pay in full. Master Makeup Artist students who choose the installment plan will receive the <strong>17-piece brush set</strong>.</p>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./enrollment-pop-up.jpg')} className="img-fluid" /></div>
        </ModalBody>
        <ModalFooter>
          <p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p>
          <p className="small mb-0">The DELUXE kit is not required for you to complete your assignments and will not determine your success in the course.</p>
        </ModalFooter>
      </Modal>
    </section>
  );
};
