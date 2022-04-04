/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';
import { useDateContext } from '../../../hooks/useDateContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../hooks/useStateContext';
import { dateOverride } from '../../../lib/dateOverride';

export const FloralPromo = (): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const serverDate = useDateContext();

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 576;

  let image: string;
  if (date.getTime() >= Date.UTC(2021, 4, 17, 13)) { // May 17 at 09:00
    image = desktop
      ? price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg')
      : price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  } else {
    image = desktop
      ? price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg')
      : price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
  }

  return (
    <section id="promoSection" style={{ padding: 0, backgroundColor: '#2a2e31' }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={image} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
