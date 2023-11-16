import React, { type FC } from 'react';
import { useScreenWidthContext } from '../../../hooks/useScreenWidthContext';

const getImage = (date: Date, desktop: boolean): [image: any, width: number, height: number, backgroundColor: CSSProperties['backgroundColor']] => {
  const backgroundColor = '#605960';
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
    <section id="promoSection" style={{ backgroundColor, padding: 0 }}>
      <div className="container text-center px-0">
        <img src={image} width={width} height={height} className="img-fluid d-block mx-auto" alt="Special Offer" />
      </div>
    </section>
  );
};
