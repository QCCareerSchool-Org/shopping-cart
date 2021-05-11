import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
};

export const Promo20210313: React.FC<Props> = ({ date }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 2, 14, 5)) {
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
    height = 604;
  } else {
    width = 600;
    height = 830;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#480003', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
        <ModalBody className="text-center p-0">
          <p className="mt-3">Get started today with our <strong>lowest deposit ever</strong>, followed by low monthly payments. Plus, receive a <strong>free Virtual Makeup Course</strong> and a <strong>free Elite Makeup Kit</strong> when you enroll in the <strong>Master Makeup Artistry Course</strong>.</p>
          <img className="img-fluid" src={require('./popup-makeup-kit.jpg')} alt="Makeup Kit" />
        </ModalBody>
        <ModalFooter>
          <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. You will receive a different, course-specific makeup starter kit with all other QC Makeup Academy courses instead of the one shown.</div>
        </ModalFooter>
      </Modal>
    </section>
  );
};
