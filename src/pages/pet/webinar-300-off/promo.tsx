import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { usePopup } from '../../../hooks/usePopup';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const backgroundColor = 'black';

export const Promo = (): ReactElement => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let width: number;
  let height: number;

  const image = desktop
    ? price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');

  if (desktop) {
    width = 960;
    height = 430;
  } else {
    width = 518;
    height = 566;
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
      <Modal size="md" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Get {price?.currency.code === 'GBP' ? '£300' : '$300'} off your tuition!</ModalHeader>
        <ModalBody>
          <p className="lead">Take advantage of this special offer and claim {price?.currency.code === 'GBP' ? '£300' : '$300'} off your dog grooming, training, or daycare tuition.</p>
          <p className="lead">You can get started today for only {price?.currency.code === 'GBP' ? '£99' : '$99'}!</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
