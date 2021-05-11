import React from 'react';

import { useDateContext } from '../../../hooks/useDateContext';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';
import { dateOverride } from '../../../lib/dateOverride';

type Props = {
  currencyCode: string;
};

export const OrganizingPromo: React.FC<Props> = ({ currencyCode }) => {
  const screenWidth = useScreenWidthContext();
  const serverDate = useDateContext();

  const date = dateOverride() ?? serverDate;

  const desktop = screenWidth > 514;

  let desktopImage;
  let mobileImage;

  if (date.getTime() >= Date.UTC(2021, 4, 12, 16)) { // May 12 at 12:00
    desktopImage = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    mobileImage = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
  } else if (date.getTime() >= Date.UTC(2021, 4, 3, 13)) { // May 3 at 09:00
    desktopImage = currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    mobileImage = currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
  } else {
    desktopImage = currencyCode === 'GBP' ? require('./desktop-uk-ends.jpg') : require('./desktop-ends.jpg');
    mobileImage = currencyCode === 'GBP' ? require('./mobile-uk-ends.jpg') : require('./mobile-ends.jpg');
  }

  return (
    <section id="promoSection" style={{ backgroundColor: '#1a1c1e', padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <img src={desktop ? desktopImage : mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </div>
    </section>
  );
};
