/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210601: React.FC<Props> = ({ date, currencyCode }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 518;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 5, 9, 16)) { // June 9 at 12:00
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg').default : require('./desktop-ends.jpg').default
      : currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg').default : require('./mobile-ends.jpg').default;
  } else {
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default
      : currencyCode === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
  }

  if (desktop) {
    width = 1202;
    height = 522;
  } else {
    width = 518;
    height = 494;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#fe281d', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Your Dog Grooming Kit</ModalHeader>
        <ModalBody className="text-center p-0">
          <div className="p-3">
            <p>Enroll today at our lowest deposit ever! Plus, receive {currencyCode === 'GBP' ? '£150' : '$200'} off your tuition.</p>
            <p>After you submit your Unit B, we&apos;ll also ship you a toolkit with the essential items you need to get started. Your kit includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
          </div>
          <img src={require('./pop-up.jpg').default} className="img-fluid" alt="promotion details" />
        </ModalBody>
      </Modal>
    </section>
  );

  function handlePromoClick(event: React.MouseEvent): void {
    event.preventDefault();
    togglePopup();
  }
};
