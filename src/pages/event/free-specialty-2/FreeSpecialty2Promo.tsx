import React, { memo, ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const potentialSavings = (currencyCode: string): string => {
  return currencyCode === 'GBP'
    ? '£778'
    : currencyCode === 'AUD'
      ? '$1289'
      : currencyCode === 'NZD'
        ? '$1358'
        : '$1039';
};

export const FreeSpecialty2Promo = memo((): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    width = 976;
    height = 500;
  } else {
    image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    width = 440;
    height = 500;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#8ef0c0', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <p>Ready to start your event planning career?</p>
            <p>Enroll in any foundation course and get a specialty course for free.</p>
            <p>This means you&apos;ll graduate with two professional certifications for the price of one (saving up to {potentialSavings(price?.currency.code ?? 'USD')} on your training)!</p>
            <p className="mb-1">Get started for {price?.currency.code === 'GBP' ? '£49' : '$49'}, or save up to {price?.currency.code === 'GBP' ? '£150' : '$300'} when you pay your tuition in full.</p>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
});

FreeSpecialty2Promo.displayName = 'FreeSpecialty2Promo';
