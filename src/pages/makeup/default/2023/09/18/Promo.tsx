import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import styles from '../../../../../../components/coloredList.module.css';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 8, 25, 4)); // September 25 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 8, 25, 4)); // September 25 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 8, 30, 4)); // September 30 at 00:00 (04:00 UTC)
const backgroundColor = '#4b494b';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: string; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1060, 541 ] : [ 600, 665 ];

  if (lastChance) {
    const image = desktop
      ? require('./desktop-ends.jpg')
      : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop
    ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const MakeupPromo20230918 = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);
  const { price } = useStateContext();

  const desktop = screenWidth >= 576;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate, price?.currency.code);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get a Free Makeup Course</ModalHeader>
          <ModalBody>
            <h5>Free Skincare Course</h5>
            <p>For a limited time, enroll in Master Makeup Artistry and get QC's Pro Makeup Workshop FREE!</p>
            <h5>Free Deluxe Collection</h5>
            <p>Master Makeup Artistry students receive the Deluxe Collection!</p>
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
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE!</strong> This exclusive offer ends soon!</span>}
      />
    </>
  );
};
