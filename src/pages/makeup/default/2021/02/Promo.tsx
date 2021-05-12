/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../hooks/useScreenWidthContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210201: React.FC<Props> = ({ date, currencyCode }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 1, 24, 17)) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default;
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 976;
    height = 502;
  } else {
    width = 600;
    height = 830;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#121212', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
        <ModalBody className="text-center p-0">
          <p className="mt-3">Enroll in the Master Makeup Artistry Course and receive any Advanced Makeup Course for free. Plus, get a free makeup kit.</p>
          <img className="img-fluid" src={require('./popup-makeup-kit.jpg').default} alt="Makeup Kit" />
        </ModalBody>
        <ModalFooter>
          Enroll in the Master Makeup Artistry Course—with our lowest deposit ever—and receive QC&apos;s new Virtual Makeup Training Course for free. Plus, receive a free makeup starter kit.
        </ModalFooter>
      </Modal>
    </section>
  );
};
