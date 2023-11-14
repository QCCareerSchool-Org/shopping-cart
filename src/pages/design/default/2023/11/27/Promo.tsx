import React, { FC, PropsWithChildren } from 'react';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';
import { Design20231127Modal } from './modal';

const timerShowDate = new Date(Date.UTC(2023, 10, 27, 5)); // November 27 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 11, 1, 5)); // December 1 at 00:00 (05:00 UTC)
const backgroundColor = '#73725e';

const getImageData = (desktop: boolean, currencyCode?: string): { image: string; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 1257, 606 ] : [ 514, 556 ];

  const image = desktop
    ? require('./desktop-ends.jpg')
    : require('./mobile-ends.jpg');
  return { image, width, height };
};

export const DesignPromo20231127: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 400;

  const { image, width, height } = getImageData(desktop, price?.currency.code);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <Container desktop={desktop}>
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </Container>
        <Design20231127Modal isOpen={popup} onToggle={togglePopup} />
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        buttonInverse={true}
        className="text-white"
        style={{ backgroundColor: 'black' }}
        message={<span style={{ textTransform: 'uppercase' }}><strong>LAST CHANCE</strong> This exclusive Cyber Monday offer ends soon!</span>}
      />
    </>
  );
};

const Container: FC<PropsWithChildren<{ desktop: boolean }>> = ({ desktop, children }) => {
  if (desktop) {
    return <div className="container text-center px-0">{children}</div>;
  }
  return <>{children}</>;
};
