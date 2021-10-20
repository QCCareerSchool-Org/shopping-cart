import React, { ReactElement, useEffect, useState } from 'react';

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

export const CountDownTimer = ({ endDate }: Props): ReactElement => {
  const [ timeRemaining, setTimeRemaining ] = useState<number>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTimeRemaining(endDate.getTime() - now.getTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [ endDate ]);

  if (timeRemaining === undefined || timeRemaining <= 0) {
    return <></>;
  }

  const { days, hours, minutes, seconds } = calculateParts(timeRemaining);

  return (
    <div className="countdownTimer">
      <Digits label="Days" value={days} />
      <Digits label="Hours" value={hours} />
      <Digits label="Minutes" value={minutes} />
      <Digits label="Seconds" value={seconds} />
    </div>
  );
};

type DigitsProps = {
  label: string;
  value: number;
};

const Digits = ({ label, value }: DigitsProps): ReactElement => (
  <div className="countdownDigitGroup">
    <div>
      <div className="countdownDigit">{firstDigit(value)}</div>
      <div className="countdownDigit">{secondDigit(value)}</div>
    </div>
    <div><small className="countdownLabel">{label}</small></div>
  </div>
);
