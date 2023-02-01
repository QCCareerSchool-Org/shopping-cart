import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const backgroundColor = '#66b5dc';

export const WoofGangPromo: FC = () => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
    width = 960;
    height = 430;
  } else {
    image = require('./mobile.jpg');
    width = 518;
    height = 566;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="md" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get $500 off your tuition!</ModalHeader>
          <ModalBody>
            <p className="lead">As a Woof Gang Bakery employee, manager or store owner you&apos;re eligible to receive an exclusive $500 discount off your Dog Grooming course tuition. This discount will automatically be applied to the pay in full and installment payment plans. No proof of employment with WGB is currently required to enroll.</p>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
};
