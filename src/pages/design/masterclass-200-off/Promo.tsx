import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const MasterClass200OffPromo = (): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
    width = 1257;
    height = 575;
  } else {
    image = require('./mobile.jpg');
    width = 514;
    height = 486;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#3c382d', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Masterclass</ModalHeader>
          <ModalBody>
            <p>As a special gift for attending the masterclass, when you enroll in Interior Decorating, we&apos;ll give you a second certification course absolutely FREE!</p>
            <p>We&apos;re also giving you {price?.currency.code === 'GBP' ? '£' : '$'}200 off your tuition! Get started for only {price?.currency.code === 'GBP' ? '£40' : '$75'} or save up to {price?.currency.code === 'GBP' ? '£300' : '$350'} when you pay in full.</p>
            <p className="mb-0"><em>This offer is only available for a limited time.</em></p>
          </ModalBody>
        </Modal>
      </section>
    </>
  );
};
