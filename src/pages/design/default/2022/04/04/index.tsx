import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

export const Promo20220404 = (): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    width = 1257;
    height = 515;
  } else {
    image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    width = 514;
    height = 486;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#9ca3b6', padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
        <ModalBody>
          <p>Ready to start your design career?</p>
          <p>Enroll in one of our internationally recognized programs and graduate with a professional certification in the home design industry!</p>
          <p className="mb-1">Get started for {price?.currency.code === 'GBP' ? '£40' : '$75'} or save up to {price?.currency.code === 'GBP' ? '£350' : '$400'} when you pay your tuition in full.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
