/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { memo } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const FreeSkinCarePromo = memo(() => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 500;

  const desktopImage = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
  const mobileImage = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');

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
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you&apos;ll get QC&apos;s <strong>Skincare course</strong> for free!</p>
          <p>That&apos;s not all: we&apos;ll also send you a <strong>professional 5-piece makeup kit</strong>.</p>
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
          <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. Your kit will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</div>
        </ModalFooter>
      </Modal>
    </section>
  );
});

FreeSkinCarePromo.displayName = 'FreeSkinCarePromo';
