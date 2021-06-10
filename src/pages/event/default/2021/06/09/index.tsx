/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';

import { usePopup } from '../../../../../../hooks/usePopup';
import { usePreloadImages } from '../../../../../../hooks/usePreloadImages';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
  currencyCode: string;
};

import couponButtonAppliedSrc from './coupon-btn-WEDDING21-active.svg';
import couponButtonSrc from './coupon-btn-WEDDING21.svg';

const preloadImages = [ couponButtonAppliedSrc ];

export const Promo20210609: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  usePreloadImages(preloadImages);

  const desktop = screenWidth > 440;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 5, 9, 16)) { // June 9 at 12:00
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
    width = 440;
    height = 442;
  }

  const buttonClick = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'WP', internal: false } });
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'CE', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'EP', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'DW', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'LW', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'WEDDING21' });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#fff', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Limited Time Offer</ModalHeader>
          <ModalBody className="text-center">
            <p>Enroll in QC&apos;s Event &amp; Wedding Planning course&mdash;with our lowest deposit ever&mdash;and get both the <strong>Destination Wedding Planning</strong> and the <strong>Luxury Wedding Planning</strong> courses for FREE.</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: '#fff' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'WEDDING21'
            ? <img src={couponButtonAppliedSrc} width="385" height="40" className="img-fluid" alt="Promo Code" />
            : <button onClick={buttonClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={couponButtonSrc} width="385" height="40" className="img-fluid" alt="Promo Code" /></button>
          }
          <Link to="/student">link</Link>
        </div>
      </div>
    </>
  );
};
