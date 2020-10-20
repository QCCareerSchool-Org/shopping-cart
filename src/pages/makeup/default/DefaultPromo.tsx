import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import qs from 'qs';

import { usePopup } from '../../../hooks/usePopup';
import { useDate } from '../../../hooks/useDateContext';

import desktop from './desktop.jpg';
import desktopNZ from './desktop-nz.jpg';
import desktopGB from './desktop-uk.jpg';
import desktopEnds from './desktop-ends.jpg';
import mobile from './mobile.jpg';
import mobileNZ from './mobile-nz.jpg';
import mobileGB from './mobile-uk.jpg';
import mobileEnds from './mobile-ends.jpg';
import popupImg from './popup-makeup-kit.jpg';
import { dateOverride } from '../../../lib/dateOverride';

export interface Props {
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
      <div className="container">
        <div className="d-none d-sm-block text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={desktopImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
        <div className="row d-block d-sm-none text-center">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={mobileImage} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
        </div>
      </div>
      <Modal size="lg" isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>Free Virtual Makeup Training and Makeup Kit</ModalHeader>
        <ModalBody className="text-center p-0">
          <img src={popupImg} className="img-fluid" alt="Makeup Kit" />
        </ModalBody>
        <ModalFooter>
          Enroll in the Master Makeup Artistry Course—with our lowest deposit ever—and receive QC&apos;s new Virtual Makeup Training Course for free. Plus, receive a free makeup starter kit.
        </ModalFooter>
      </Modal>
    </section>
  );
};
