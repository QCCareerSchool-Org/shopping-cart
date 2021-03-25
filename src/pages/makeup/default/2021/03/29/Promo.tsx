import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
}

export const Promo20210329: React.FC<Props> = ({ date }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();
  const { meta: { promoCode } } = useStateContext();
  const dispatch = useDispatchContext();

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date >= new Date('2021-04-04T12:00:00-04:00')) {
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = require('./desktop.jpg');
    } else {
      image = require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 976;
    height = 604;
  } else {
    width = 600;
    height = 830;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#480003', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}><img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" /></button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody className="text-center p-0">
            <div className="p-2">
              <p>Get started today with our <strong>lowest deposit ever</strong>, followed by low monthly payments.</p>
              <p>Enter promo code <strong>FOUNDIT</strong> to get the <strong>Pro Makeup Workshop</strong> free when you also enroll in the <strong>Master Makeup Artistry Course</strong>.</p>
            </div>
            <img className="img-fluid" src={require('./popup-makeup-kit.jpg')} alt="Makeup Kit" />
          </ModalBody>
          <ModalFooter>
            <div>The kit pictured above is included only when you enroll in the <strong>Master Makeup Artistry</strong> course. You will receive a different, course-specific makeup starter kit with all other QC Makeup Academy courses instead of the one shown.</div>
          </ModalFooter>
        </Modal>
      </section>
      <div className="bg-black text-white">
        <div className="container py-3 d-flex justify-content-center">
          {promoCode === 'FOUNDIT'
            ? <img src={require('./found-it-over.png')} className="img-fluid" alt="Promo Code" />
            : <button onClick={() => { dispatch({ type: 'SET_PROMO_CODE', payload: 'FOUNDIT' }); }} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={require('./found-it.png')} className="img-fluid" alt="Promo Code" /></button>
          }
        </div>
      </div>
    </>
  );
};
