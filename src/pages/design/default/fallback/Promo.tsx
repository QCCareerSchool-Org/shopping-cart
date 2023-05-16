import React, { FC, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../hooks/useStateContext';

const backgroundColor = '#615849';

export const DesignFallbackPromo: FC = () => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 520;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
    width = 1257;
    height = 542;
  } else {
    image = require('./mobile.jpg');
    width = 514;
    height = 486;
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Printed Textbooks Included</ModalHeader>
        <ModalBody>
          <p className="mb-0">The following courses include printed books: Interior Decorating, Home Staging, Landscape Design, Color Consultant, Floral Design, and Event Decor. Textbooks will automatically be sent to you when you enroll.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
