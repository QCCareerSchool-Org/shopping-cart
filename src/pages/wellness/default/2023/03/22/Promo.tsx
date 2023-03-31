import React, { FC, useMemo } from 'react';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDateContext } from '../../../../../../hooks/useDateContext';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';
import { dateOverride } from '../../../../../../lib/dateOverride';

const lastChanceDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)
const timerShowDate = new Date(Date.UTC(2023, 2, 27, 4)); // March 27 at 00:00 (04:00 UTC)

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

export const WellnessPromo20230322: FC = () => {
  const serverDate = useDateContext();
  const date = dateOverride() ?? serverDate;
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const timerEndDate = useMemo(() => {
    if (date.getTime() >= Date.UTC(2023, 3, 1, 4)) {
      return new Date(Date.UTC(2023, 3, 3, 4)); // April 3 at 00:00 (04:00 UTC)
    }
    return new Date(Date.UTC(2023, 3, 1, 4)); // April 1 at 00:00 (04:00 UTC)
  }, [ date ]);

  const desktop = screenWidth > 532;

  const { image, width, height } = getImageData(desktop, lastChanceDate.getTime() >= date.getTime(), price?.currency.code);

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
