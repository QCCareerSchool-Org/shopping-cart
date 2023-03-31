import React, { FC, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)

const backgroundColor = '#f5f5f5';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 976, 500 ] : [ 440, 500 ];

  if (lastChance) {
    const image = desktop ? require('./desktop-ends.jpg') : require('./mobile-ends.jpg');
    return { image, width, height };
  }
  const image = desktop
    ? currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
    : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  return { image, width, height };
};

export const EventPromo20230322: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2023, 3, 1, 4)) {
      return new Date(Date.UTC(2023, 3, 3, 4)); // April 3 at 00:00 (04:00 UTC)
    }
    return new Date(Date.UTC(2023, 3, 1, 4)); // April 1 at 00:00 (04:00 UTC)
  }, [ date ]);

  const desktop = screenWidth >= 440;

  const { image, width, height } = getImageData(desktop, lastChanceDate.getTime() >= date.getTime(), price?.currency.code);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Upgrade your event planning skills!</ModalHeader>
          <ModalBody>
            <p className="mb-0">Enroll in any foundation course and get any two free specialty courses. You can get started today for only {price?.currency.code === 'GBP' ? '£49' : '$49'}!</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        buttonInverse={true}
        className="text-white"
        style={{ backgroundColor: 'black' }}
        message={<><span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span></>}
      />
    </>
  );
};
