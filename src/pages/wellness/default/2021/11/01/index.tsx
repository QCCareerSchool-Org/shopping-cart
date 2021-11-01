/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

const timerEndDate = new Date(Date.UTC(2021, 10, 12, 5)); // November 12 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2021, 10, 5, 4)); // November 5 at 00:00 (04:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2021, 10, 11, 5)); // November 11 at 00:00 (05:00 UTC)

export const Promo20211101: React.FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();

  const desktop = screenWidth > 371;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 9, 29, 4)) { // November 11 at 00:00 (05:00 UTC)
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 960;
    height = 469;
  } else {
    width = 532;
    height = 502;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#f1e3bb', padding: 0 }}>
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
        style={{ backgroundColor: '#071f39', color: 'white' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>{price?.currency.code === 'GBP' ? '£' : '$'}50 discount</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
