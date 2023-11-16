import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import styles from '../../../../../../components/coloredList.module.css';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const timerShowDate = new Date(Date.UTC(2023, 10, 27, 5)); // November 27 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 11, 1, 5)); // December 1 at 00:00 (05:00 UTC)
const backgroundColor = '#fcfcfc';

const getImageData = (desktop: boolean, currencyCode?: string): { image: string; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1060, 575 ] : [ 600, 669 ];

  const image = desktop
    ? require('./desktop-ends.jpg')
    : require('./mobile-ends.jpg');
  return { image, width, height };
};

export const MakeupPromo20231127 = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);
  const { price } = useStateContext();

  const desktop = screenWidth >= 576;

  const { image, width, height } = getImageData(desktop, price?.currency.code);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Black Friday Special Offer</ModalHeader>
          <ModalBody>
            <p className="lead">Start Your Makeup Career</p>
            <p>For a limited time, enroll in <strong>Master Makeup Artistry</strong> and get QC's <strong>Pro Makeup Workshop</strong> FREE. You'll also get the ENTIRE Luminous Makeup Collection!</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div>
                <img src={require('../../../../../../images/deluxe-kit-numbers-no-description.jpg')} width="650" height="1056" className="img-fluid" />
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
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        buttonInverse={true}
        className="text-white"
        style={{ backgroundColor: 'black' }}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE!</strong> This exclusive Cyber Monday offer ends soon!</span>}
      />
    </>
  );
};
