import React, { CSSProperties, ReactElement, useEffect, useRef, useState } from 'react';
import { CountDownTimer } from './CountDownTimer';

type Props = {
  date: Date;
  endDate: Date;
  message?: string | ReactElement;
  className?: string;
  style?: CSSProperties;
};

export const CountDownTimerWrapper = ({ date, endDate, message, className, style }: Props): ReactElement | null => {
  const [ closed, setClosed ] = useState(false);
  const ref = useRef<any>(null);
  const [ stuck, setStuck ] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element instanceof HTMLElement) {
      const scrollListener = (): void => {
        if (element.offsetTop <= window.pageYOffset + 1) {
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

  if (!showTimer) {
    return null;
  }

  return (
    <div id="countDownTimerWrapper" ref={ref} className={`${className} ${stuck ? 'stuck' : ''} ${closed ? 'closed' : ''}`} style={style}>
      <button onClick={() => setClosed(true)} style={{ position: 'absolute', top: 8, right: 16 }} className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
      {stuck && message && <div id="countDownTimerMessage">{message}</div>}
      <CountDownTimer endDate={endDate} />
    </div>
  );
};
