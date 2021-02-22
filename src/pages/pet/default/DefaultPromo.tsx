import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useDate } from '../../../hooks/useDateContext';

import { dateOverride } from '../../../lib/dateOverride';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

type Props = {
  countryCode: string;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ countryCode, currencyCode }) => {
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 518;

  let image;
  if (date >= new Date('2021-02-24T12:00:00-05:00')) {
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg')
      : currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
  } else {
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
      : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  }

  let width: number;
  let height: number;
  if (desktop) {
    width = 1202;
    height = 522;
  } else {
    width = 518;
    height = 418;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#12222b', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Your Dog Grooming Kit</ModalHeader>
        <ModalBody className="text-center p-0">
          <div className="p-3">
            <p>Enroll today and receive a toolkit with the essential items you need to get started, including professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
            <p>After you submit your Unit B, we&apos;ll also ship you a WAHL ARCO 5-in-1 Cordless Clipper AND stainless steel attachment guide comb kit!</p>
          </div>
          <img src={require('./pop-up.jpg')} className="img-fluid" alt="promotion details" />
        </ModalBody>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent) {
    event.preventDefault();
    togglePopup();
  }
};
