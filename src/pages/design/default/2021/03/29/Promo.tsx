/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
};

export const Promo20210329: React.FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 3, 4, 4)) {
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
    width = 1257;
    height = 532;
  } else {
    width = 514;
    height = 416;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#487c78', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Easter Offer</ModalHeader>
        <ModalBody className="text-center">
          <p>Enroll in one of QC&apos;s design courses and receive <strong>Virtual Design</strong> and <strong>any other course</strong> (of equal or lesser value) for FREE!</p>
        </ModalBody>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent): void {
    event.preventDefault();
    togglePopup();
  }
};
