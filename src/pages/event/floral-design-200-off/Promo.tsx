/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const backgroundColor = '#000';

export const Floral200Promo = (): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 440;

  const [ image, width, height ] = desktop
    ? [
      price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg'),
      976,
      500,
    ]
    : [
      price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg'),
      440,
      500,
    ];

  return (
    <section id="promoSection" style={{ padding: 0, backgroundColor }}>
      <div className="container px-0">
        <div className="text-center">
          <button onClick={togglePopup} className="btn btn-link p-0 border-0 btn-no-hover-shadow">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Start Your Dream Career</ModalHeader>
        <ModalBody>
          <p>When you enroll in QC&apos;s Floral Design course, you&apos;ll save $200 on your tuition! You can get started for $49 or save an additional $300 if you decide to pay in full.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
