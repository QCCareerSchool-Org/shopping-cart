/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210529: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 4, 30, 4)) { // May 30 at 00:00
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
    width = 976;
    height = 500;
  } else {
    width = 496;
    height = 510;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#000', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
        <ModalBody className="text-center">
          <p>Enroll in one of QC&apos;s foundation courses&mdash;at our lowest deposit ever&mdash;and receive any two specialty courses for free (of equal or lesser value).</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
