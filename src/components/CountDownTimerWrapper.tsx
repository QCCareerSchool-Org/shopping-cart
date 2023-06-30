import React, { CSSProperties, memo, ReactElement, useEffect, useRef, useState } from 'react';
import { CountDownTimer } from './CountDownTimer';

type Props = {
  date: Date;
  showDate: Date;
  endDate: Date;
  message?: string | ReactElement;
  buttonInverse?: boolean;
  className?: string;
  style?: CSSProperties;
};

export const CountDownTimerWrapper = memo(({ date, showDate, endDate, message, buttonInverse = false, className, style }: Props): ReactElement | null => {
  const [ closed, setClosed ] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [ scrolledPast, setScrolledPast ] = useState(false);
  const [ fixed, setFixed ] = useState(false);

  useEffect(() => {
    const element = wrapperRef.current;
    if (element) {
      const scrollListener = (): void => {
        setScrolledPast(element.offsetTop <= window.scrollY + 1);
      };
      scrollListener();
      window.addEventListener('scroll', scrollListener);
      return () => window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  // delay calling setFixed to avoid iOS Safari visual glitch when scrolling up
  useEffect(() => {
    const id = setTimeout(() => {
      setFixed(scrolledPast);
    }, 100);
    return () => clearTimeout(id);
  }, [ scrolledPast ]);

  const showTimer = date >= showDate && date < endDate;

  if (!showTimer) {
    return null;
  }

  return (
    <div id="countDownTimerWrapper" ref={wrapperRef} className={`${className} ${fixed && !closed ? 'fixed' : ''}`} style={style}>
      {fixed && (
        <div style={{ position: 'absolute', top: 8, right: 16, width: 26, height: 26, borderRadius: 13, background: 'rgba(255, 255, 255, 0.2)' }}>
          <button onClick={() => setClosed(true)} style={{ position: 'relative', top: -2, left: -4 }} className={`close ${buttonInverse ? 'text-white' : 'text-black'}`} aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
      )}
      {fixed && message && <div id="countDownTimerMessage">{message}</div>}
      <CountDownTimer endDate={endDate} />
    </div>
  );
});

CountDownTimerWrapper.displayName = 'CountDownTimerWrapper';
