import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../hooks/useStateContext';

const backgroundColor = '#57c3d7';

export const PetFallbackPromo: FC = () => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 518;

  let width: number;
  let height: number;

  const image = desktop
    ? price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');

  if (desktop) {
    width = 960;
    height = 400;
  } else {
    width = 518;
    height = 566;
  }

  const [ promoDiscount, getStarted ] = price?.currency.code === 'GBP'
    ? [ '£75', '£99' ]
    : [ '$100', '$99' ];

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <Modal size="md" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Get {promoDiscount} off your tuition!</ModalHeader>
        <ModalBody>
          <p className="lead mb-0">Enroll and get {promoDiscount} off your tuition! You can get started today for only {getStarted}!</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
