/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

export const Promo20210816: React.FC<Props> = ({ date }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();

  const desktop = screenWidth > 518;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 7, 12, 4)) { // August 12 at 00:00 (04:00 GMT)
    image = desktop
      ? price?.currency.code === 'GBP' ? require('./desktop-ends-uk.jpg').default : require('./desktop-ends.jpg').default
      : price?.currency.code === 'GBP' ? require('./mobile-ends-uk.jpg').default : require('./mobile-ends.jpg').default;
  } else {
    image = desktop
      ? price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default
      : price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
  }

  if (desktop) {
    width = 960;
    height = 400;
  } else {
    width = 418;
    height = 570;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#060606', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
        <ModalBody className="text-center p-0">
          <div className="p-3">
            <p>Enroll today at our lowest deposit ever! Plus, receive {price?.currency.code === 'GBP' ? '£150' : '$200'} off your tuition.</p>
            <p>After you submit your Unit B, we&apos;ll also ship you a toolkit with the essential items you need to get started. Your kit includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
          </div>
          <img src={require('./pop-up.jpg').default} className="img-fluid" alt="promotion details" />
        </ModalBody>
      </Modal>
    </section>
  );
};
