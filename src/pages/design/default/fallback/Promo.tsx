import React, { FC, useMemo } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { usePopup } from '../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../hooks/useStateContext';

const backgroundColor = '#8d7960';

export const DesignFallbackPromo: FC = () => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 520;

  let image: string;
  let width: number;
  let height: number;

  if (desktop) {
    image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    width = 1257;
    height = 542;
  } else {
    image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    width = 514;
    height = 486;
  }

  const vdPrice = useMemo(() => {
    switch (price?.currency.code) {
      case 'GBP':
        return '£250';
      case 'AUD':
        return '$450';
      case 'NZD':
        return '$500';
      default:
        return '$350';
    }
  }, [ price?.currency.code ]);

  return (
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </button>
      </div>
      <Modal isOpen={popup} toggle={togglePopup}>
        <ModalHeader toggle={togglePopup}>FREE Virtual Design Training</ModalHeader>
        <ModalBody>
          <p>Ready to start your home design career?</p>
          <p>Enroll in ANY design course and receive <strong>Virtual Design Training</strong> for FREE. This offer is valued at {vdPrice}!</p>
          <p>Get started for {price?.currency.code === 'GBP' ? '£40' : '$75'}, or save up to {price?.currency.code === 'GBP' ? '£350' : '$400'} when you pay your tuition in full.</p>
          <p className="mb-0">Why Learn Virtual Design? The market for virtual design has exploded! Benefit by learning this important skill and open your services up to a worldwide market. Plus, you&apos;ll receive an additional certification recognizing your efforts in this booming field of design.</p>
        </ModalBody>
      </Modal>
    </section>
  );
};
