import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
  currencyCode: string;
}

export const Promo20210419: React.FC<Props> = ({ date, currencyCode }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();

  if (currencyCode === 'AUD' || currencyCode === 'NZD') {
    return <section style={{ padding: 0 }}></section>;
  }

  const desktop = screenWidth > 518;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 3, 28, 16)) {
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg')
      : currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
  } else {
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
      : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  }

  if (desktop) {
    width = 1202;
    height = 522;
  } else {
    width = 518;
    height = 494;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#00477d', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={handlePromoClick}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Your Dog Grooming Kit</ModalHeader>
        <ModalBody className="text-center p-0">
          <div className="p-3">
            <p>Enroll today&mdash;at our lowest deposit ever&mdash;and receive a toolkit with the essential items you need to get started. This includes professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
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
