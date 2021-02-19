import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../hooks/usePopup';
import { useDate } from '../../../hooks/useDateContext';

import { dateOverride } from '../../../lib/dateOverride';

import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

type Props = {
  countryCode: string;
  currencyCode: string;
}

export const DefaultPromo: React.FC<Props> = ({ countryCode, currencyCode }) => {
  const serverDate = useDate();
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();

  const date = dateOverride() || serverDate;

  const desktop = screenWidth >= 576;

  let image;
  if (date >= new Date('2020-10-29T00:00:00-04:00')) {
    image = desktop ? require('./desktop-ends.jpg') : require('./mobile-ends.jpg');
  } else {
    image = desktop
      ? [ 'US', 'CA', 'AU' ].includes(countryCode) ? require('./desktop.jpg') : currencyCode === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop-nz.jpg')
      : [ 'US', 'CA', 'AU' ].includes(countryCode) ? require('./mobile.jpg') : currencyCode === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile-nz.jpg');
  }

  let width: number;
  let height: number;
  if (desktop) {
    width = 976;
    height = 502;
  } else {
    width = 600;
    height = 762;
  }

  const backgroundColor = '#b8a4f4';

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container px-0">
        <div className="text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Free Virtual Makeup Training and Makeup Kit</ModalHeader>
        <ModalBody className="text-center p-0">
          <img src={require('./popup-makeup-kit.jpg')} className="img-fluid" alt="Makeup Kit" />
        </ModalBody>
        <ModalFooter>
          Enroll in the Master Makeup Artistry Course—with our lowest deposit ever—and receive QC&apos;s new Virtual Makeup Training Course for free. Plus, receive a free makeup starter kit.
        </ModalFooter>
      </Modal>
    </section>
  );
};
