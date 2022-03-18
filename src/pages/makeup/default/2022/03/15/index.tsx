import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

export const Promo20220315 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = require('./desktop.jpg');
    width = 1060;
    height = 633;
  } else {
    image = require('./mobile.jpg');
    width = 600;
    height = 669;
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#868d9d', padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Start your makeup career for only {price?.currency.code === 'GBP' ? '£' : '$'}49!</ModalHeader>
        <ModalBody>
          <p>Enroll in Master Makeup Artistry and we&apos;ll send you a professional 5-piece makeup kit.</p>
          <p>This master makeup kit comes with everything you need to start your career as Makeup Artist including:</p>
          <ul>
            <li>an 88-shade eye shadow palette</li>
            <li>a 20-shade conceal &amp; correct palette</li>
            <li>a 32-shade lip palette</li>
            <li>a 16-piece brush set</li>
            <li>a 28-shade powder blush palette</li>
          </ul>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./starter-makeup-kit.jpg')} className="img-fluid" /></div>
        </ModalBody>
        <ModalFooter>
          <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. You will receive a different, course-specific makeup starter kit with all other QC Makeup Academy courses instead of the one shown.</div>
        </ModalFooter>
      </Modal>
    </section>
  );
};
