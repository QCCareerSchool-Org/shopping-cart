import React, { memo, ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const Bogo1Promo = memo((): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    width = 976;
    height = 500;
  } else {
    image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    width = 440;
    height = 500;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#a4cb96', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <p>Ready to start your event planning career?</p>
            <p>For a limited time only, enroll in any foundation course and get a second course for free!</p>
            <p>This means you&apos;ll graduate with two professional certifications for the price of one.</p>
            <p className="mb-1">Get started for {price?.currency.code === 'GBP' ? '£49' : '$49'}, or save up to {price?.currency.code === 'GBP' ? '£150' : '$300'} when you pay your tuition in full.</p>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
});

Bogo1Promo.displayName = 'Bogo1Promo';
