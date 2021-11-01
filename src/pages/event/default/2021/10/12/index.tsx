/* eslint-disable @typescript-eslint/no-magic-numbers */
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const endDate = new Date(Date.UTC(2021, 9, 30, 4));
const showDate = new Date(Date.UTC(2021, 9, 13, 4));

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

  if (date.getTime() >= Date.UTC(2021, 10, 29, 4)) { // October 29 at 00:00 (04:00 UTC)
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
            <p>Until Friday, October 29th, you can enroll in <strong>Event &amp; Wedding Planning</strong> and get 2 FREE Specialization Courses: QC&apos;s <strong>Luxury Wedding</strong> course and <strong>Destination Wedding Planning</strong> course. With the upcoming wave of rescheduled weddings, you&apos;ll take the industry by storm!</p>
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={showDate}
        endDate={endDate}
        className="bg-white"
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>free bonus course</strong> offer <strong className="endHighlight">ends {date.getTime() >= endDate.getTime() - (1000 * 60 * 60 * 24) ? 'today' : 'soon'}</strong></span>}
      />
      <div className="text-white" style={{ backgroundColor: 'white' }}>
        <div className="container py-3 d-flex justify-content-center">
          {price?.promoCode === 'WEDDING21'
            ? <button className="btn btn-primary" disabled><FontAwesomeIcon icon={faCheck} /> Promo Code Applied</button>
            : <button onClick={buttonClick} className="btn btn-primary">Apply Promo Code: <strong>WEDDING21</strong></button>
          }
        </div>
      </div>
    </>
  );
};
