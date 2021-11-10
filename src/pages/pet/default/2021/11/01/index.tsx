/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';

import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
};

const timerEndDate = new Date(Date.UTC(2021, 10, 13, 5)); // November 13 at 00:00 (05:00 UTC)
const timerShowDate = new Date(Date.UTC(2021, 10, 5, 4)); // November 5 at 00:00 (04:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2021, 10, 11, 5)); // November 11 at 00:00 (05:00 UTC)

export const Promo20211101: React.FC<Props> = ({ date }) => {
  const [ popup, togglePopup ] = usePopup(false);
  const screenWidth = useScreenWidthContext();
  const { price } = useStateContext();

  const desktop = screenWidth > 518;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 10, 11, 5)) { // November 11 at 00:00 (05:00 UTC)
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
    height = 566;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#f6a029', padding: 0 }}>
        <div className="container px-0">
          <div className="text-center">
            <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
              <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
            </button>
          </div>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Get {price?.currency.code === 'GBP' ? '£100' : '$150'} Off Your Course!</ModalHeader>
          <ModalBody className="text-center p-0">
            <div className="p-3">
              <p>Enroll in QC&apos;s Pet Grooming Course and save {price?.currency.code === 'GBP' ? '£100' : '$150'} on your tuition.</p>
              <hr />
              <p>After you submit your Unit B, we&apos;ll also ship you a toolkit with the essential items you need to get started. Your kit includes a WAHL ARCO 5-in-1 Cordless Clipper, a stainless steel attachment guide comb kit, professional-grade grooming scissors, brushes, combs, and nail clippers.</p>
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
