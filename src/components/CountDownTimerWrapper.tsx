import { detect } from 'detect-browser';
import React, { CSSProperties, memo, ReactElement, useEffect, useRef, useState } from 'react';

const browser = detect();

// handle the case where we don't detect the browser
if (browser) {
  console.log(browser.name);
  console.log(browser.version);
  console.log(browser.os);
}

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
        const show = element.offsetTop <= window.scrollY + 1;
        if (browser && browser.os === 'iOS' && browser.name === 'safari') {
          setScrolledPast(show); // set scrolledPast for eventual change
        } else {
          setFixed(show); // set immediately
        }
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
    }, 200);
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
