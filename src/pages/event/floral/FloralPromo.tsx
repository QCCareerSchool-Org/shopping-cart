/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { useDateContext } from '../../../hooks/useDateContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../lib/dateOverride';

type Props = {
  currencyCode: string;
};

export const FloralPromo: React.FC<Props> = ({ currencyCode }) => {
  const screenWidth = useScreenWidthContext();
  const serverDate = useDateContext();

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 576;

  let image: string;
  if (date.getTime() >= Date.UTC(2021, 4, 17, 13)) { // May 17 at 09:00
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default
      : currencyCode === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
  } else {
    image = desktop
      ? currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg').default : require('./desktop-ends.jpg').default
      : currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg').default : require('./mobile-ends.jpg').default;
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
