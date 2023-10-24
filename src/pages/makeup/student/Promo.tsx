import React, { CSSProperties, FC } from 'react';
import { CountDownTimerWrapper } from '../../../components/CountDownTimerWrapper';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

const startDate = new Date(Date.UTC(2023, 9, 23, 12, 30));
const endDate = new Date(Date.UTC(2023, 10, 1, 4));

const getImage = (date: Date, desktop: boolean): [image: any, width: number, height: number, backgroundColor: CSSProperties['backgroundColor']] => {
  if (date >= startDate && date < endDate) {
    const backgroundColor = '#f5b9af';
    if (desktop) {
      return [ require('./desktop-portfolio.jpg'), 1060, 431, backgroundColor ];
    }
    return [ require('./mobile-portfolio.jpg'), 600, 390, backgroundColor ];
  }
  const backgroundColor = '#2b2b2b';
  if (desktop) {
    return [ require('./desktop.jpg'), 1060, 401, backgroundColor ];
  }
  return [ require('./mobile.jpg'), 600, 390, backgroundColor ];
};

type Props = {
  date: Date;
};

export const Promo: FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const desktop = screenWidth >= 576;

  const [ image, width, height, backgroundColor ] = getImage(date, desktop);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </section>
      <CountDownTimerWrapper
        date={date}
        showDate={startDate}
        endDate={endDate}
        buttonInverse={true}
        className="text-white"
        style={{ backgroundColor: 'black' }}
        message={<span style={{ textTransform: 'uppercase' }}>This exclusive offer ends soon!</span>}
      />
    </>
  );
};
