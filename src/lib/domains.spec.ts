import faker from 'faker';

import { isMakeup, isEvent, isDesign } from './domains';

describe('domains', () => {

  describe('isMakeup', () => {
    [ 'makeup.localhost', 'enroll.qcmakeupacademy.com', 'makeup.enrolltest.qccareerschool.com' ].forEach(site => {
      it(`should return true when domain is '${site}'`, () => {
        expect(isMakeup(site)).toBe(true);
      });
    });
    Array(100).fill(0).map((_, i) => i).forEach(() => {
      it('should return false for other domains', () => {
        const site = faker.internet.domainName();
        expect(isMakeup(site)).toBe(false);
      });
    });
  });

  describe('isDesign', () => {
    [ 'design.localhost', 'enroll.qcdesignschool.com', 'design.enrolltest.qccareerschool.com' ].forEach(site => {
      it(`should return true when domain is '${site}'`, () => {
        expect(isDesign(site)).toBe(true);
      });
    });
    Array(100).fill(0).map((_, i) => i).forEach(() => {
      it('should return false for other domains', () => {
        const site = faker.internet.domainName();
        expect(isDesign(site)).toBe(false);
      });
    });
  });
});
