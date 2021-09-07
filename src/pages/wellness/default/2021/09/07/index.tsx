/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

export const Promo20210907: React.FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 371;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 8, 17, 4)) { // September 17 at 00:00 (04:00 UTC)
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-ends-uk.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-ends-uk.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 960;
    height = 469;
  } else {
    width = 532;
    height = 528;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#abc2ba', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Get {price?.currency.code === 'GBP' ? '£75' : '$100'} Off Your Course!</ModalHeader>
        <ModalBody>
          <p>Enroll in QC&apos;s Sleep Consultant Course and save {price?.currency.code === 'GBP' ? '£75' : '$100'} on your tuition.</p>
          <p>Plus, you&apos;ll receive QC&apos;s Grab-and-Go Kit! Valued at {price?.currency.code === 'GBP' ? '£40' : '$50'}, this kit includes a QC tote bag and a NEW eco-friendly planner.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
