import React, { ReactElement } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import { CountDownTimerWrapper } from '../../../../../../components/CountDownTimerWrapper';
import { usePopup } from '../../../../../../hooks/usePopup';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

const timerShowDate = new Date(Date.UTC(2021, 11, 11, 5)); // December 11 at 00:00 (05:00 UTC)
const timerLastChanceDate = new Date(Date.UTC(2021, 11, 17, 5)); // December 17 at 00:00 (05:00 UTC)
const timerEndDate = new Date(Date.UTC(2021, 11, 18, 5)); // December 18 at 00:00 (05:00 UTC)

type Props = {
  date: Date;
};

export const Promo20211201 = ({ date }: Props): ReactElement => {
  const { price } = useStateContext();
  const screenWidth = useScreenWidthContext();
  const [ popup, togglePopup ] = usePopup(false);

  const desktop = screenWidth >= 576;

  let image: string;
  let width: number;
  let height: number;

  if (date.getTime() >= Date.UTC(2021, 11, 16, 5)) { // December 16 at 00:00 (05:00 UTC)
    if (desktop) {
      image = require('./desktop-ends.jpg');
    } else {
      image = require('./mobile-ends.jpg');
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg') : require('./desktop.jpg');
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg') : require('./mobile.jpg');
    }
  }

  if (desktop) {
    width = 1257;
    height = 581;
  } else {
    width = 514;
    height = 486;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#e4e4e6', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Your Holiday Gift!</ModalHeader>
          <ModalBody>
            <p>Start your design career with two professional certifications! Until December 17th, you can enroll in any design course and you&apos;ll get a FREE second course of your choice!</p>
            <p>Plus, you&apos;ll receive the Deluxe Design Kit as an exclusive holiday gift! Don&apos;t miss your chance to get the NEW easy-to-use laser &ldquo;tape&rdquo; measure.</p>
            <p>This Week&apos;s Featured Course: Color Consultant Course</p>
            <p><strong>Learn How to Train Your Eye for Color!</strong></p>
            <p>Color sensei, Jane Lockhart, will teach you how to work with color psychology. You&apos;ll transform dull rooms into head-turning and inviting spaces.</p>
            <p>Valued at $1048, this extra certificate will help you add a lucrative revenue stream to your business.</p>
            <img src={require('./pop-up-deluxe-kit.jpg')} className="img-fluid" alt="Deluxe Design Kit" />
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        style={{ backgroundColor: '#373737', color: '#e4e4e6' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>holiday gift</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
