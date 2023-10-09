import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import styles from '../../../../components/coloredList.module.css';
import { usePopup } from '../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../hooks/useStateContext';

const backgroundColor = 'black';

export const MakeupFallbackPromo = (): ReactElement => {
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);
  const { price } = useStateContext();

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    width = 1060;
    height = 489;
  } else {
    image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    width = 600;
    height = 589;
  }

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Luminous Collection</ModalHeader>
        <ModalBody>
          <p>Get the entire <strong>Luminous Collection</strong> when you enroll in <strong>Master Makeup Artistry</strong>.</p>
          <p>Graduate as a Master International Makeup Professional™ (MIMP™) in just a few short months and build your beauty empire!</p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
              <img src={require('../../../../images/deluxe-kit-numbers-no-description.jpg')} width="650" height="1056" className="img-fluid" />
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
        </ModalFooter>
      </Modal>
    </section>
  );
};
