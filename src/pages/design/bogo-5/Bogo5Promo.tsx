import React, { memo, ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const potentialSavings = (currencyCode: string): string => {
  return currencyCode === 'GBP'
    ? '£1298'
    : currencyCode === 'AUD' || currencyCode === 'NZD'
      ? '$1849'
      : '$1698';
};

export const Bogo5Promo = memo((): ReactElement => {
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
    height = 542;
  } else {
    image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    width = 514;
    height = 486;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#dae8f5', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>BOGO is back for a limited time only!</ModalHeader>
          <ModalBody>
            <p>Ready to start your home design career?</p>
            <p>Enroll in any design course and get a second certification course for FREE! This means you could save up to {potentialSavings(price?.currency.code ?? 'USD')} on your tuition.</p>
            <p className="mb-1">Get started for {price?.currency.code === 'GBP' ? '£40' : '$75'} or save up to {price?.currency.code === 'GBP' ? '£350' : '$400'} when you pay your tuition in full.</p>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
});

Bogo5Promo.displayName = 'Bogo5Promo';
