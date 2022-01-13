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

export const Promo20210517: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 4, 26, 16)) { // May 26 at 00:00
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 442;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#e9efed', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
        <ModalBody className="text-center">
          <p>Enroll in one of QC&apos;s foundation courses&mdash;at our lowest deposit ever&mdash;and receive a specialty course for free (of equal or lesser value).</p>
          <p>Plus, get a FREE 6-month subscription to Aisle Planner, an all-in-one event planning software. Valued at $250, this super software will allow you to manage clients, plan projects, streamline workflows, design floor plans, and much more!</p>
          <p>Designed for the modern event professional, this software will be invaluable for your event planning career.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
