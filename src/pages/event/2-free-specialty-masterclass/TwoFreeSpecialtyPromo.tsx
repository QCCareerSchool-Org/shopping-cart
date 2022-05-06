import React, { memo, ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

const potentialSavings = (currencyCode: string): string => {
  return currencyCode === 'GBP'
    ? '£1556'
    : currencyCode === 'AUD'
      ? '$2578'
      : currencyCode === 'NZD'
        ? '$2716'
        : '$2078';
};

export const TwoFreeSpecialtyPromo = memo((): ReactElement => {
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
      <section id="promoSection" style={{ backgroundColor: '#020d1f', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <p>Ready to start your event planning career?</p>
            <p>Enroll in any foundation course and get TWO specialty courses for free.</p>
            <p>This means you&apos;ll graduate with three professional certifications for the price of one (saving up to {potentialSavings(price?.currency.code ?? 'USD')} on your training)!</p>
            <p className="mb-1">Get started for {price?.currency.code === 'GBP' ? '£49' : '$49'}, or save up to {price?.currency.code === 'GBP' ? '£150' : '$300'} when you pay your tuition in full.</p>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
});

TwoFreeSpecialtyPromo.displayName = 'TwoFreeSpecialtyPromo';
