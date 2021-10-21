import React, { CSSProperties, ReactElement, useEffect, useRef, useState } from 'react';
import { CountDownTimer } from './CountDownTimer';

type Props = {
  date: Date;
  endDate: Date;
  className?: string;
  style?: CSSProperties;
};

export const CountDownTimerWrapper = ({ date, endDate, className, style }: Props): ReactElement | null => {
  const ref = useRef<any>(null);
  const [ stuck, setStuck ] = useState(false);

  useEffect(() => {
    console.log('wrapper effect');
    const element = ref.current;
    if (element instanceof HTMLElement) {
      const scrollListener = (): void => {
        console.log('scroll', element.offsetTop, window.pageYOffset, element.offsetTop <= window.pageYOffset);
        if (element.offsetTop <= window.pageYOffset) {
          setStuck(true);
        } else {
          setStuck(false);
        }
      };
      scrollListener();
      window.addEventListener('scroll', scrollListener);
      return () => window.removeEventListener('scroll', scrollListener);
    }
  }, [ ref ]);

  const showTimer = date.getTime() >= endDate.getTime() - (1000 * 60 * 60 * 24 * 7) && date < endDate;

  console.log('render');

  if (!showTimer) {
    return null;
  }

  return (
    <div id="countDownTimerWrapper" ref={ref} className={`${className} ${stuck ? 'stuck' : ''}`} style={style}>
      <CountDownTimer endDate={endDate} />
    </div>
  );
};
