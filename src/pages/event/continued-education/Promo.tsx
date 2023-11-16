import React, { CSSProperties, FC, useMemo } from 'react';

import { CountDownTimerWrapper } from '../../../components/CountDownTimerWrapper';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

const bfStartDate = new Date(Date.UTC(2023, 10, 16, 14, 30)); // November 16 at 09:30 (15:30 UTC)
const switchDate = new Date(Date.UTC(2023, 10, 27, 5)); // November 27 at 00:00 (05:00 UTC)
const cmEndDate = new Date(Date.UTC(2023, 11, 1, 5)); // December 1 at 00:00 (05:00 UTC)

const getImage = (date: Date, desktop: boolean): [image: any, width: number, height: number, backgroundColor: CSSProperties['backgroundColor']] => {
  if (date >= bfStartDate && date < switchDate) {
    const backgroundColor = '#183930';
    if (desktop) {
      return [ require('./desktop-bf.jpg'), 1060, 431, backgroundColor ];
    }
    return [ require('./mobile-bf.jpg'), 600, 390, backgroundColor ];
  }

  if (date >= switchDate && date < cmEndDate) {
    const backgroundColor = '#183930';
    if (desktop) {
      return [ require('./desktop-cm.jpg'), 1060, 431, backgroundColor ];
    }
    return [ require('./mobile-cm.jpg'), 600, 390, backgroundColor ];
  }

  const backgroundColor = '#727274';
  if (desktop) {
    return [ require('./desktop.jpg'), 1060, 401, backgroundColor ];
  }
  return [ require('./mobile.jpg'), 600, 390, backgroundColor ];
};

type Props = {
  date: Date;
};

export const ContinuedEducationPromo: FC<Props> = ({ date }) => {
  const screenWidth = useScreenWidthContext();
  const desktop = screenWidth >= 576;

  const [ image, width, height, backgroundColor ] = getImage(date, desktop);

  const [ startDate, endDate, message ] = useMemo(() => {
    if (date >= bfStartDate && date < switchDate) {
      return [ bfStartDate, switchDate, 'This exclusive Black Friday offer ends soon!' ];
    }
    if (date >= switchDate && date < cmEndDate) {
      return [ switchDate, cmEndDate, 'This exclusive Cyber Monday offer ends soon!' ];
    }
    return [ null, null, 'This exclusive offer ends soon!' ];
  }, [ date ]);

  return (
    <>
      <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
        <div className="container text-center px-0">
          <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
        </div>
      </section>
      {startDate && endDate && (
        <CountDownTimerWrapper
          date={date}
          showDate={startDate}
          endDate={endDate}
          buttonInverse={true}
          className="text-white"
          style={{ backgroundColor: 'black' }}
          message={<span style={{ textTransform: 'uppercase' }}>{message}</span>}
        />
      )}
    </>
  );
};
