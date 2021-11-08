import React, { CSSProperties, ReactElement, useEffect, useRef, useState } from 'react';
import { CountDownTimer } from './CountDownTimer';

type Props = {
  date: Date;
  showDate: Date;
  endDate: Date;
  message?: string | ReactElement;
  className?: string;
  style?: CSSProperties;
};

export const CountDownTimerWrapper = ({ date, showDate, endDate, message, className, style }: Props): ReactElement | null => {
  const [ closed, setClosed ] = useState(false);
  const ref = useRef<any>(null);
  const [ fixed, setFixed ] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (element instanceof HTMLElement) {
      const scrollListener = (): void => {
        setFixed(element.offsetTop <= window.pageYOffset + 1);
      };
      scrollListener();
      window.addEventListener('scroll', scrollListener);
      return () => window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  const showTimer = date >= showDate && date < endDate;

  if (!showTimer) {
    return null;
  }

  return (
    <div id="countDownTimerWrapper" ref={ref} className={`${className} ${fixed && !closed ? 'fixed' : ''}`} style={style}>
      {fixed && (
        <div style={{ position: 'absolute', top: 8, right: 16, width: 26, height: 26, borderRadius: 13, background: 'rgba(255, 255, 255, 0.2)' }}>
          <button onClick={() => setClosed(true)} style={{ position: 'relative', top: -2, left: -4 }} className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
      )}
      {fixed && message && <div id="countDownTimerMessage">{message}</div>}
      <CountDownTimer endDate={endDate} />
    </div>
  );
};
