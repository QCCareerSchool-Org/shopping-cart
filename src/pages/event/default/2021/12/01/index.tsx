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
      image = price?.currency.code === 'GBP' ? require('./desktop-uk-ends.jpg').default : require('./desktop-ends.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk-ends.jpg').default : require('./mobile-ends.jpg').default;
    }
  } else {
    if (desktop) {
      image = price?.currency.code === 'GBP' ? require('./desktop-uk.jpg').default : require('./desktop.jpg').default;
    } else {
      image = price?.currency.code === 'GBP' ? require('./mobile-uk.jpg').default : require('./mobile.jpg').default;
    }
  }

  if (desktop) {
    width = 976;
    height = 500;
  } else {
    width = 440;
    height = 500;
  }

  return (
    <>
      <section id="promoSection" style={{ backgroundColor: '#00202b', padding: 0 }}>
        <div className="container text-center px-0">
          <button className="btn btn-link p-0 border-0 btn-no-hover-shadow" onClick={togglePopup}>
            <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
          </button>
        </div>
        <Modal size="lg" isOpen={popup} toggle={togglePopup}>
          <ModalHeader toggle={togglePopup}>Your Holiday Gift!</ModalHeader>
          <ModalBody>
            <p>Enroll in <strong>Event &amp; Wedding Planning</strong> and get your second course free! This means you can save up to $1498.</p>
            <p>Plus, we&apos;re sending you an exclusive gift to celebrate the Holiday season! You&apos;ll receive <cite>The Little Book of Wedding Checklists</cite>. This portable wedding planner provides all the tools and tips you need to stay organized and stress free!</p>
            <img src={require('./pop-up-book-image.jpg').default} className="img-fluid" alt="The Little Book of Wedding Checklists" />
          </ModalBody>
        </Modal>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={timerShowDate}
        endDate={timerEndDate}
        style={{ backgroundColor: '#9cffd1', color: '#00202b' }}
        message={<span style={{ textTransform: 'uppercase' }}>The <strong>holiday gift</strong> offer <strong className="endHighlight">ends {date >= timerLastChanceDate ? 'today' : 'soon'}</strong></span>}
      />
    </>
  );
};
