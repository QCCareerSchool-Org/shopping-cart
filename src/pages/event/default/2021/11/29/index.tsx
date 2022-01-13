import React, { ReactElement } from 'react';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2021, 10, 29, 14)); // November 29 at 09:00 (14:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2021, 10, 30, 5)); // November 30 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2021, 11, 1, 5)); // December 1 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20211129 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 10, 30, 5)) { // November 30 at 00:00 (05:00 UTC)
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg');
    } else {
      image = require('./mobile.jpg');
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
      <section id="promoSection" style={{ backgroundColor: '#d6d7d9', padding: 0 }}>
        <div className="container text-center px-0">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        className="text-white"
        style={{ backgroundColor: '#2a5157' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>cyber monday</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
