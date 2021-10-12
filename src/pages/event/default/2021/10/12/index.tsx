/* eslint-disable @typescript-eslint/no-magic-numbers */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

export const Promo20211012 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth > 514;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 10, 15, 4)) { // October 15 at 00:00 (04:00 UTC)
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
    dispatch({ type: 'SET_PROMO_CODE', payload: 'WEDDING21' });
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'CE', internal: false } });
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'WP', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'EP', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'DW', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'LW', internal: false } });
  };

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: 'white', padding: 0 }}>
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
            <p>Until Friday, October 15th, you can enroll in <strong>Event &amp; Wedding Planning</strong> and get 2 FREE Specialization Courses: QC&apos;s <strong>Luxury Wedding</strong> course and <strong>Destination Wedding Planning</strong> course. With the upcoming wave of rescheduled weddings, you&apos;ll take the industry by storm!</p>
          </ModalBody>
        </Modal>
      </section>
      <div className="text-white" style={{ backgroundColor: 'white' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'WEDDING21'
            ? <button className="btn btn-primary" disabled>Promo Code Applied <FontAwesomeIcon icon={faCheck} /></button>
            : <button onClick={buttonClick} className="btn btn-primary">Apply Promo Code: WEDDING21</button>
          }
        </div>
      </div>
    </>
  );
};
