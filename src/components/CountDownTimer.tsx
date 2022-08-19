import React, { memo, ReactElement, useEffect, useState } from 'react';

type Props = {
  endDate: Date;
};

type CalculatePartsResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calculateParts = (miliseconds: number): CalculatePartsResult => {
  let msRemaining = miliseconds;

  const milisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(msRemaining / milisecondsPerDay);
  msRemaining -= days * milisecondsPerDay;

  const milisecondsPerHour = 1000 * 60 * 60;
  const hours = Math.floor(msRemaining / milisecondsPerHour);
  msRemaining -= hours * milisecondsPerHour;

  const milisecondsPerMinute = 1000 * 60;
  const minutes = Math.floor(msRemaining / milisecondsPerMinute);
  msRemaining -= minutes * milisecondsPerMinute;

  const milisecondsPerSecond = 1000;
  const seconds = Math.floor(msRemaining / milisecondsPerSecond);
  msRemaining -= seconds * milisecondsPerSecond;

  return { days, hours, minutes, seconds };
};

const firstDigit = (n: number): number => {
  return Math.floor(n / 10);
};

const secondDigit = (n: number): number => {
  return n % 10;
};

export const CountDownTimer = memo(({ endDate }: Props): ReactElement => {
  const [ timeRemaining, setTimeRemaining ] = useState<number>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(endDate.getTime() - new Date().getTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [ endDate ]);

  if (typeof timeRemaining === 'undefined' || timeRemaining <= 0) {
    return <></>;
  }

  const { days, hours, minutes, seconds } = calculateParts(timeRemaining);

  const daysMuted = days === 0;
  const hoursMuted = daysMuted && hours === 0;
  const minutesMuted = hoursMuted && minutes === 0;

  return (
    <div className="countdownTimer">
      <Digits label="Days" value={days} muted={daysMuted} />
      <Digits label="Hours" value={hours} muted={hoursMuted} />
      <Digits label="Minutes" value={minutes} muted={minutesMuted} />
      <Digits label="Seconds" value={seconds} />
    </div>
  );
});

CountDownTimer.displayName = 'CountDownTimer';

type DigitsProps = {
  label: string;
  value: number;
  muted?: boolean;
};

const Digits = ({ label, value, muted = false }: DigitsProps): ReactElement => (
  <div className="countdownDigitGroup">
    <div className={`countdownDigitWrapper ${muted ? 'muted' : ''}`}>
      <div className="countdownDigit">{firstDigit(value)}</div>
      <div className="countdownDigit">{secondDigit(value)}</div>
    </div>
    <div><small className="countdownLabel">{label}</small></div>
  </div>
);
