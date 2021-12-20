/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';

import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

const timerShowDate = new Date(Date.UTC(2021, 11, 31, 5)); // December 31 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2022, 0, 7, 5)); // January 7 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2022, 0, 8, 5)); // January 8 at 00:00 (05:00 UTC)

export const Promo20211220 = ({ date }: Props): ReactElement => {
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();

  const desktop = screenWidth > 518;

  let width: number;
  let height: number;

  const image = desktop
    ? price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default
    : price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;

  if (desktop) {
    width = 960;
    height = 400;
  } else {
    width = 518;
    height = 566;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#aeaeae', padding: 0 }}>
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
        className="text-white"
        style={{ backgroundColor: '#6b0209' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>holiday gift</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
