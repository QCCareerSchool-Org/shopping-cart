/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDateContext } from '../../../../../../hooks/useDateContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

export const Promo20210313: React.FC = () => {
  const screenWidth = useScreenWidthContext();
  const serverDate = useDateContext();
  const [ popup, togglePopup ] = usePopup(false);

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 2, 14, 5)) {
    if (desktop) {
      image = require('./desktop-ends.jpg').default;
    } else {
      image = require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg').default;
    } else {
      image = require('./mobile.jpg').default;
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
    <section id="promoSection" style={{ backgroundColor: '#001fb3', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
        <ModalBody className="text-center">
          <p>Receive a <strong>FREE Benjamin Moore color fan deck</strong> when you enroll in any course. Plus, get <strong>ANY second course for FREE</strong> (of equal or lesser value)</p>
        </ModalBody>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent): void {
    event.preventDefault();
    togglePopup();
  }
};
