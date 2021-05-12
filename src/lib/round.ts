export const round = (num: number, precision = 2): number => {
  const MAX_PRECISION = 15;
  const BASE = 10;
  const factor = BASE ** precision;
  const m = Number((Math.abs(num) * factor).toPrecision(MAX_PRECISION));
  return Math.round(m) / factor * Math.sign(num);
};
