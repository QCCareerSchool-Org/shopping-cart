/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { memo } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const ProPlusLuminousPromo = memo(() => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 500;

  const desktopImage = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
  const mobileImage = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');

  return (
    <section id="promoSection" style={{ padding: 0, backgroundColor: '#131f2e' }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={desktop ? desktopImage : mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited-Time Offer</ModalHeader>
        <ModalBody>
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you&apos;ll get QC&apos;s <strong>Pro Makeup Workshop</strong> for free!</p>
          <p>That&apos;s not all: if you choose the pay-in-full payment plan we&apos;ll also send you the entire <strong>DELUXE Kit with 17-piece brush set</strong>. Part payers will receive a 17-piece brush set.</p>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}><img src={require('./enrollment-pop-up.jpg')} className="img-fluid" /></div>
        </ModalBody>
        <ModalFooter>
          <p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p>
          <p className="small mb-0">The DELUXE kit is not required for you to complete your assignments and will not determine your success in the course.</p>
        </ModalFooter>
      </Modal>
    </section>
  );
});

ProPlusLuminousPromo.displayName = 'ProPlusLuminousPromo';
