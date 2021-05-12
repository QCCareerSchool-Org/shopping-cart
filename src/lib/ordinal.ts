/* eslint-disable @typescript-eslint/no-magic-numbers */
export const ordinal = (n: number): string => {
  const s = [ 'th', 'st', 'nd', 'rd' ];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
