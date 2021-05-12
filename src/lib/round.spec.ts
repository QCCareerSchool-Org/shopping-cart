import { round } from './round';

describe('round', () => {
  it('should round numbers correctly', () => {
    expect(round(132.4834)).toBe(132.48);
  });

  it('should handle numbers like 1.005 correctly (i.e. return 1.01 rather than 1)', () => {
    expect(round(1.005)).toBe(1.01);
  });

  it('should work with negative numbers', () => {
    // round x.5 away from zero
    expect(round(-1.005)).toBe(-1.01);
  });

  it('should round to arbitrary decimal places', () => {
    expect(round(32.84398434, 4)).toBe(32.844);
  });
});
