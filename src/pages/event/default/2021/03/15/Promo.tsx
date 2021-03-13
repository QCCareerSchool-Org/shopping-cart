import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDate } from '../../../../../../hooks/useDateContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

type Props = {
  currencyCode: string;
}

export const Promo20210302: React.FC<Props> = ({ currencyCode }) => {
  const screenWidth = useScreenWidthContext();
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date('2021-03-24T12:00:00-04:00')) {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-ends-uk.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-ends-uk.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./2021/03/desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./2021/03/mobile-uk.jpg') : require('./2021/03/mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 500;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#3d4354', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
        <ModalBody className="text-center">
          <p className="my-5">Enroll in one foundation course&mdash;with our lowest deposit ever&mdash;and get a FREE Specialty Course.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
