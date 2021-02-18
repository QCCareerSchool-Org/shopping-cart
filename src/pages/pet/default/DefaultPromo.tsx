import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useDate } from '../../../hooks/useDateContext';

import { dateOverride } from '../../../lib/dateOverride';

import desktop from './desktop.jpg';
import desktopNZ from './desktop-nz.jpg';
import desktopGB from './desktop-uk.jpg';
import desktopEnds from './desktop-ends.jpg';
import mobile from './mobile.jpg';
import mobileNZ from './mobile-nz.jpg';
import mobileGB from './mobile-uk.jpg';
import mobileEnds from './mobile-ends.jpg';
import popupImg from './popup-makeup-kit.jpg';

type Props = {
  countryCode: string;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ countryCode, currencyCode }) => {
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);

  const date = dateOverride() || serverDate;

  let desktopImage;
  let mobileImage;
  if (date >= new Date('2020-10-29T00:00:00-04:00')) {
    desktopImage = desktopEnds;
    mobileImage = mobileEnds;
  } else {
    desktopImage = [ 'US', 'CA', 'AU' ].includes(countryCode) ? desktop : currencyCode === 'GBP' ? desktopGB : desktopNZ;
    mobileImage = [ 'US', 'CA', 'AU' ].includes(countryCode) ? mobile : currencyCode === 'GBP' ? mobileGB : mobileNZ;
  }
  const backgroundColor = '#b8a4f4';

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
    </section>
  );
};
