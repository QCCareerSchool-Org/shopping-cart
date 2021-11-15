/* eslint-disable @typescript-eslint/no-magic-numbers */
import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

const timerShowDate = new Date(Date.UTC(2021, 10, 20, 5)); // November 26 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2021, 10, 26, 5)); // November 20 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2021, 10, 27, 5)); // November 27 at 00:00 (05:00 UTC)

export const Promo20211115 = ({ date }: Props): ReactElement => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();

  const desktop = screenWidth > 518;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 10, 24, 5)) { // November 24 at 00:00 (05:00 UTC)
    image = desktop
      ? price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg').default : require('./desktop-ends.jpg').default
      : price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg').default : require('./mobile-ends.jpg').default;
  } else {
    image = desktop
      ? price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default
      : price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
  }

  if (desktop) {
    width = 960;
    height = 400;
  } else {
    width = 518;
    height = 578;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#010713', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Special Offer</ModalHeader>
          <ModalBody className="p-0">
            <div className="p-3">
              <h5>Black Friday Discount</h5>
              <p>Enroll now and get {price?.currency.code === 'GBP' ? '£220' : '$300'} off your tuition.</p>
              <h5>Dog Grooming Kit</h5>
              <p>For students of the Dog Grooming Course, after you submit your Unit B we&apos;ll also ship you a toolkit with the essential items you need to get started. Your kit includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
            </div>
            <img src={require('./pop-up.jpg').default} className="img-fluid" alt="promotion details" />
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        style={{ backgroundColor: '#0e1037', color: 'white' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>{price?.currency.code === 'GBP' ? '£100' : '$150'} discount</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
