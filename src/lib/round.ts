export const round = (num: number, precision = 2): number => {
  const factor = 10 ** precision;
  const m = Number((Math.abs(num) * factor).toPrecision(15));
  return Math.round(m) / factor * Math.sign(num);
};
