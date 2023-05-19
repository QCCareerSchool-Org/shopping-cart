import React, { FC } from 'react';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 4, 25, 4)); // May 25 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 4, 25, 4)); // May 25 at 00:00 (04:00 UTC)
const timerEndDate = new Date(Date.UTC(2023, 4, 29, 4)); // May 29 at 00:00 (04:00 UTC)
const backgroundColor = '#d7d8dc';

const getImageData = (desktop: boolean, lastChance: boolean, currencyCode?: string): { image: any; width: number; height: number } => {
  const [ width, height ] = desktop ? [ 960, 469 ] : [ 532, 440 ];

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

export const WellnessPromo20230522: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth > 440;

  const { image, width, height } = getImageData(desktop, date >= lastChanceDate, price?.currency.code);

  const promoDiscount = price?.currency.code === 'GBP' ? '£75' : '$100';

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </div>
        </div>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        buttonInverse={true}
        className="text-white"
        style={{ backgroundColor: 'black' }}
        message={<><span style={{ textTransform: 'uppercase' }}>Last chance!</span> Get {promoDiscount} off your tuition!</>}
      />
    </>
  );
};
