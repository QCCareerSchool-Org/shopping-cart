/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210501: React.FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 4, 2, 4)) { // May 2 at 00:00
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg');
    } else {
      image = require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 442;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#039bf5', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
        <ModalBody className="text-center">
          <p>Receive a FREE leather portfolio when you enroll in any course.</p>
          <p>Enroll in QC&apos;s Event &amp; Wedding Planning course&mdash;with our lowest deposit ever&mdash;and get both the Destination Wedding Planning and the Luxury Wedding Planning courses for FREE.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
