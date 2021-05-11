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
  if (date.getTime() >= Date.UTC(2021, 4, 12, 16)) { // May 12 at 12:00
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
  } else if (date.getTime() >= Date.UTC(2021, 4, 3, 13)) { // May 3 at 09:00
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  } else {
    if (desktop) {
      image = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    } else {
      image = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
    }
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
