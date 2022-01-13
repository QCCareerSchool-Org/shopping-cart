/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210505: React.FC<Props> = ({ date }) => {
  const dispatch = useDispatchContext();

  const button1Click = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MW', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'MOTHERSDAY' });
  };

  const button2Click = (): void => {
    dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: 'MK', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'MZ', internal: false } });
    dispatch({ type: 'ADD_COURSE', payload: { courseCode: 'SK', internal: false } });
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SKINCARE60' });
  };

  return (
    <section id="promoSection" style={{ backgroundColor: '#000' }}>
      <div className="container text-center">
        {date >= new Date(Date.UTC(2021, 4, 9, 4)) // May 9 at 00:00
          ? <img src={require('./title-last-chance.svg').default} className="img-fluid mb-4" alt="Last Chance -- Enroll in Master Makeup Artisty and Choose Your Offer" />
          : <img src={require('./title.svg').default} className="img-fluid mb-4" alt="Enroll in Master Makeup Artisty and Choose Your Offer" />
        }
        <div className="row">
          <div className="col-12 col-sm-6 mb-3 mb-sm-0">
            <Card
              code="MOTHERSDAY"
              description="Free 6-piece makeup kit"
              imgSrc={require('./MOTHERSDAY-card.jpg')}
              onClick={button1Click}
            />
          </div>
          <div className="col-12 col-sm-6">
            <Card
              code="SKINCARE60"
              description="Free advanced course"
              imgSrc={require('./SKINCARE60-card.jpg')}
              onClick={button2Click}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

type CardProps = {
  code: string;
  description: string;
  imgSrc: string;
  onClick: () => void;
};

const Card: React.FC<CardProps> = ({ code, description, imgSrc, onClick }) => {
  const { price } = useStateContext();

  return (
    <div style={{ position: 'relative' }}>
      <img src={imgSrc} width="518" height="463" className="img-fluid" alt={description} />
      <div style={{ position: 'absolute', width: '100%', bottom: '2rem' }}>
        {price?.promoCode === code
          ? <img src={require('./choose-offer-btn-active.png')} width="172" height="36" className="img-fluid" alt={`${code} Promo Code Applied`} />
          : <button onClick={onClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={require('./choose-offer-btn.png')} width="172" height="36" className="img-fluid" alt={`Apply ${code} Promo Code`} /></button>
        }
      </div>
    </div>
  );
};
