import React from 'react';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerEndDate = new Date(Date.UTC(2021, 10, 13, 5)); // November 13 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2021, 10, 5, 4)); // November 5 at 00:00 (04:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2021, 10, 11, 5)); // November 11 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20211101: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 10, 11, 5)) { // November 11 at 00:00 (05:00 UTC)
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 401;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#030a19', padding: 0 }}>
        <div className="container text-center px-0">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        className="text-white"
        style={{ backgroundColor: '#030a19' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>free 2<sup>nd</sup> course</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
      {date >= timerShowDate && date < timerEndDate && <div style={{ backgroundColor: '#030a19', height: 24 }} />}
    </>
  );
};
