/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { memo } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import styles from '../../../components/coloredList.module.css';
import { usePopup } from '../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';

export const FreeSkinCarePromo = memo(() => {
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);
  const { price } = useStateContext();

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
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Limited-Time Offer</ModalHeader>
        <ModalBody>
          <h4>Free Skincare Course</h4>
          <p>When you enroll in <strong>Master Makeup Artistry</strong>, you&apos;ll get QC&apos;s <strong>Skincare course</strong> for free!</p>
          <h4>Free DELUXE Collection</h4>
          <p>Get the entire <strong>DELUXE Kit with 17-piece brush set</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <img src={require('../../../images/deluxe-kit-numbers-no-description.jpg')} width="650" height="1056" className="img-fluid" />
            </div>
            <ol className={styles.coloredList}>
              <li>17-piece professional brush set</li>
              <li>88-shade eye shadow palette</li>
              <li>32-shade lip palette</li>
              <li>28-shade blush palette</li>
              <li>20-shade conceal &amp; correct palette</li>
              <li>9-shade contour palette</li>
              <li>4-shade highlight palette</li>
              <li>5-shade eyebrow palette</li>
              <li>4 sets of faux lashes</li>
              <li>Pro palette &amp; spatula</li>
            </ol>
          </div>
        </ModalBody>
        <ModalFooter>
          <p className="small">Your items will be automatically sent to you after you have submitted Unit A of the course in the Online Student Center. Items in the kit are subject to change.</p>
          <p className="small mb-0">The DELUXE Collection is not required for you to complete your assignments and will not determine your success in the course.</p>
        </ModalFooter>
      </Modal>
    </section>
  );
});

FreeSkinCarePromo.displayName = 'FreeSkinCarePromo';
