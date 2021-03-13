import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDate } from '../../../../../../hooks/useDateContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

export const Promo20210313: React.FC = () => {
  const screenWidth = useScreenWidthContext();
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date('2021-03-14T00:00:00-05:00')) {
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = require('./2021/03/desktop.jpg');
    } else {
      image = require('./2021/03/mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 414;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#041f28', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
        <ModalBody className="text-center">
          <p>Receive a FREE leather portfolio when you enroll in any course.</p>
          <p>Plus, when you enroll in one of QC’s foundation courses&mdash;at our lowest deposit ever&mdash;you&apos;ll get a specialty course for free (of equal or lesser value).</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
