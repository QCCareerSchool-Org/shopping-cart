/* eslint-disable @typescript-eslint/no-magic-numbers */
import React from 'react';

import { useDispatchContext } from '../../../../../../hooks/useDispatchContext';
import { useScreenWidthContext } from '../../../../../../hooks/useScreenWidthContext';
import { useStateContext } from '../../../../../../hooks/useStateContext';

type Props = {
  date: Date;
  currencyCode: string;
};

export const Promo20210517: React.FC<Props> = ({ date }) => {
  const { price } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();

  const desktop = screenWidth >= 768;

  const button1Click = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'MAY21' });
  };

  const button2Click = (): void => {
    dispatch({ type: 'SET_PROMO_CODE', payload: 'SPRING100' });
  };

  return (
    <section id="promoSection" style={{ backgroundColor: 'white', backgroundImage: `url(${desktop ? require('./background.jpg') : require('./background-mobile.jpg')})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover' }}>
      <div className="container text-center">
        {date >= new Date(Date.UTC(2021, 4, 26, 16)) // May 26 at 12:00
          ? <img src={desktop ? require('./title-ends.svg') : require('./title-mobile-ends.svg').default} className="img-fluid mb-4" alt="Last Chance -- Enroll Today and Choose Your Offer" />
          : <img src={desktop ? require('./title.svg') : require('./title-mobile.svg').default} className="img-fluid mb-4" alt="Enroll Today and Choose Your Offer" />
        }
        <div className="row">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <Card
              code="MAY21"
              description="Free 6-piece makeup kit"
              imgSrc={require('./MAY21-card.jpg')}
              onClick={button1Click}
              margin={desktop ? '0 0 0 auto' : '0 auto'}
            />
          </div>
          <div className="col-12 col-md-6">
            <Card
              code="SPRING100"
              description="Free advanced course"
              imgSrc={price?.currency.code === 'GBP' ? require('./SPRING100-card-uk.jpg') : require('./SPRING100-card.jpg')}
              onClick={button2Click}
              margin={desktop ? 0 : '0 auto'}
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
  margin: any;
};

const Card: React.FC<CardProps> = ({ code, description, imgSrc, onClick, margin }) => {
  const { price } = useStateContext();

  return (
    <div style={{ position: 'relative', width: 312, height: 414, margin }}>
      <img src={imgSrc} width="312" height="414" className="img-fluid" alt={description} />
      <div style={{ position: 'absolute', width: '100%', bottom: '1.5rem' }}>
        {price?.promoCode === code
          ? <img src={require('./choose-offer-btn-active.png')} width="228" height="46" className="img-fluid" alt={`${code} Promo Code Applied`} />
          : <button onClick={onClick} className="btn btn-link p-0 border-0 btn-no-hover-shadow"><img src={require('./choose-offer-btn.png')} width="228" height="46" className="img-fluid" alt={`Apply ${code} Promo Code`} /></button>
        }
      </div>
    </div>
  );
};
