/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

import couponButtonAppliedSrc from './button-SPECIALIST-active.svg';
import couponButtonSrc from './button-SPECIALIST.svg';

const preloadImages = [ couponButtonAppliedSrc ];

type Props = {
  date: Date;
};

export const Promo20211001 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 9, 29, 4)) { // October 29 at 00:00 (04:00 UTC)
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
    width = 976;
    height = 500;
  } else {
    width = 514;
    height = 652;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SPECIALIST' });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'EP', internal: false } });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#ffe3c2', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>FREE Specialty Course</ModalHeader>
          <ModalBody>
            <p>Until October 31st, you can take advantage of a scary good deal: Enroll in <strong>Event &amp; Wedding Planning</strong> and get a <strong>FREE specialty course</strong>. You can choose from 8 courses&mdash;{price?.currency.code === 'GBP' ? 'and save hundreds on your tuition' : 'and save up to $1039'}!</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#ffe3c2' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'SPECIALIST'
            ? <img src={couponButtonAppliedSrc} width="297" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="297" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
