/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { memo } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

export const LuminousPromo = memo(() => {
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 500;

  const desktopImage = require('./desktop.jpg');
  const mobileImage = require('./mobile.jpg');

  return (
    <section id="promoSection" style={{ padding: 0, backgroundColor: 'white' }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={desktop ? desktopImage : mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited-Time Offer</ModalHeader>
        <ModalBody>
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, we&apos;ll send you the entire <strong>Luminous Collection</strong></p>
          <p>This professional makeup kit comes with everything you need to start your career as Makeup Artist including:</p>
          <ul>
            <li>an 88-shade eye shadow palette</li>
            <li>a 20-shade conceal &amp; correct palette</li>
            <li>a 32-shade lip palette</li>
            <li>a 16-piece brush set</li>
            <li>a 28-shade powder blush palette</li>
          </ul>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./enrollment-pop-up.jpg')} className="img-fluid" /></div>
        </ModalBody>
        <ModalFooter>
          <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. Your kit will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center.</div>
        </ModalFooter>
      </Modal>
    </section>
  );
});

LuminousPromo.displayName = 'LuminousPromo';
