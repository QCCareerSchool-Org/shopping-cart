import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

import styles from './promo.module.css';

const lastChanceDate = new Date(Date.UTC(2023, 5, 9, 4)); // June 9 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 5, 9, 4)); // June 9 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 5, 13, 4)); // June 13 at 00:00 (04:00 UTC)
const backgroundColor = '#f4f4f4';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1060, 541 ] : [ 600, 656 ];

  if (lastChance) {
    const image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg')
      : currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop
    ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const MakeupPromo20230605 = (): ReactElement => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);
  const { price } = useStateContext();

  const desktop = screenWidth >= 576;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate);

  const kitValue = price?.currency.code === 'GBP' ? '£699' : '$899';

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Limited-Time Offer</ModalHeader>
          <ModalBody>
            <h5>Free Pro Makeup Workshop</h5>
            <p>Enroll in Master Makeup Artistry and get the Pro Makeup Workshop FREE (Value = {kitValue}). This career-building workshop will allow you to push your artistry even further! Plus, you&apos;ll work directly with celebrity makeup artist, Nathan Johnson.</p>
            <h5>Free Deluxe Collection</h5>
            <p>Master Makeup Artistry students receive the Deluxe Collection!<span className="text-primary">*</span></p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div>
                <img src={require('./enrollment-pop-up.jpg')} width="650" height="1056" className="img-fluid" />
              </div>
              <ol className={styles.coloredList}>
                <li>17-piece brush set</li>
                <li>88-shade eye shadow palette</li>
                <li>32-shade lip palette</li>
                <li>28-shade blush palette</li>
                <li>20-shade conceal & correct palette</li>
                <li>9-shade contour palette</li>
                <li>4-shade highlight palette</li>
                <li>5-shade eyebrow palette</li>
                <li>4 sets of faux lashes</li>
                <li>Pro palette &amp; spatula</li>
              </ol>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="text-start">
              <p className="small"><span className="text-primary">*</span> Deluxe Collection shipping schedule:</p>
              <ul className="small">
                <li><p>Students who choose the Pay-in-Full option will receive the entire Deluxe Collection after submitting Unit A.</p></li>
                <li><p>Students who choose the Installment Plan will receive the 17-piece brush set after submitting Unit A and will receive the rest of the Deluxe Collection once tuition is paid in full.</p></li>
              </ul>
              <p className="small">The Deluxe Collection is not required for you to complete your assignments and will not determine your success in the course.</p>
              <p className="small mb-0">Items in the Deluxe Collection are subject to change.</p>
            </div>
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
        message={<span style={{ textTransform: 'uppercase' }}><strong>Last chance!</strong> Get the Pro Makeup Workshop FREE!</span>}
      />
    </>
  );
};
