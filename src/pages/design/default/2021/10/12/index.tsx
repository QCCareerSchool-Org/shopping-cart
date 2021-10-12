/* eslint-disable @typescript-eslint/no-magic-numbers */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { PromoCode } from '../../../../../../components/PromoCode';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

export const Promo20211012: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 10, 16, 4)) { // October 16 at 00:00 (04:00 UTC)
    if (desktop) {
      image = require('./desktop-ends.jpg').default;
    } else {
      image = require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg').default;
    } else {
      image = require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 1257;
    height = 503;
  } else {
    width = 514;
    height = 614;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'TREAT' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#000', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody>
            <h5>Get a FREE Certification Course!</h5>
            <p>Enroll in ANY of QC&apos;s online design courses and use promo code <PromoCode>TREAT</PromoCode> to get any 2nd course for FREE. This means you could save up to $1498!</p>
            <p>Plus, you&apos;ll receive the NEW easy-to-use laser &ldquo;tape&rdquo; measure. It makes measuring rooms an absolute breeze.</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#000' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'TREAT'
            ? <button className="btn btn-primary" disabled>Promo Code Applied <FontAwesomeIcon icon={faCheck} /></button>
            : <button onClick={buttonClick} className="btn btn-primary">Apply Promo Code: TREAT</button>
          }
        </div>
      </div>
    </>
  );
};
