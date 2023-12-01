import React, { memo, ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

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

const backgroundColor = '#73725e';

export const Bogo1Promo = memo((): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
    width = 1257;
    height = 608;
  } else {
    image = require('./mobile.jpg');
    width = 514;
    height = 556;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <p>Ready to start your home design career?</p>
            <p>For a limited time only, enroll in any design course and get a second certification course for FREE! This means you could save up to {potentialSavings(price?.currency.code ?? 'USD')} on your tuition.</p>
            <p className="mb-1">Get started for {price?.currency.code === 'GBP' ? '£40' : '$75'}, or save up to {price?.currency.code === 'GBP' ? '£350' : '$400'} when you pay your tuition in full.</p>
          </ModalBody>
          <ModalFooter>
            <small>Enroll in any design course to receive free design software as well as our brand new Career Essentials Collection filled with business & social media templates!</small>
          </ModalFooter>
        </Modal>
      </section>
    </>
  );
});

Bogo1Promo.displayName = 'Bogo1Promo';
