import faker from 'faker';

import { isDesign, isEvent, isMakeup, isPet, isWellness, isWriting } from '../lib/domains';
import { getSite } from './getSite';

jest.mock('../lib/domains');

describe('getSite', () => {

  it('should return \'makeup\' when isMakeup returns true', () => {
    (isMakeup as jest.Mock).mockReturnValue(true);
    const domain = faker.internet.domainName();
    expect(getSite(domain)).toBe('makeup');
  });

  it('should return \'design\' when isMakeup returns false and isDesign returns true', () => {
    (isMakeup as jest.Mock).mockReturnValue(false);
    (isDesign as jest.Mock).mockReturnValue(true);
    const domain = faker.internet.domainName();
    expect(getSite(domain)).toBe('design');
  });

  it('should return \'event\' when isMakeup, isDesign return false and isEvent returns true', () => {
    (isMakeup as jest.Mock).mockReturnValue(false);
    (isDesign as jest.Mock).mockReturnValue(false);
    (isEvent as jest.Mock).mockReturnValue(true);
    const domain = faker.internet.domainName();
    expect(getSite(domain)).toBe('event');
  });

  it('should return \'pet\' when isMakeup, isDesign, isEvent return false and isPet returns true', () => {
    (isMakeup as jest.Mock).mockReturnValue(false);
    (isDesign as jest.Mock).mockReturnValue(false);
    (isEvent as jest.Mock).mockReturnValue(false);
    (isPet as jest.Mock).mockReturnValue(true);
    const domain = faker.internet.domainName();
    expect(getSite(domain)).toBe('pet');
  });

  it('should return \'wellness\' when isMakeup, isDesign, isEvent, isPet return false and isWellness returns true', () => {
    (isMakeup as jest.Mock).mockReturnValue(false);
    (isDesign as jest.Mock).mockReturnValue(false);
    (isEvent as jest.Mock).mockReturnValue(false);
    (isPet as jest.Mock).mockReturnValue(false);
    (isWellness as jest.Mock).mockReturnValue(true);
    const domain = faker.internet.domainName();
    expect(getSite(domain)).toBe('wellness');
  });

  it('should return \'writing\' when isMakeup, isDesign, isEvent, isPet, isWellness return false and isWriting returns true', () => {
    (isMakeup as jest.Mock).mockReturnValue(false);
    (isDesign as jest.Mock).mockReturnValue(false);
    (isEvent as jest.Mock).mockReturnValue(false);
    (isPet as jest.Mock).mockReturnValue(false);
    (isWellness as jest.Mock).mockReturnValue(false);
    (isWriting as jest.Mock).mockReturnValue(true);
    const domain = faker.internet.domainName();
    expect(getSite(domain)).toBe('writing');
  });

  it('should return null when isMakeup, isDesign, isEvent, isPet, isWellness, isWriting return false', () => {
    (isMakeup as jest.Mock).mockReturnValue(false);
    (isDesign as jest.Mock).mockReturnValue(false);
    (isEvent as jest.Mock).mockReturnValue(false);
    (isPet as jest.Mock).mockReturnValue(false);
    (isWellness as jest.Mock).mockReturnValue(false);
    (isWriting as jest.Mock).mockReturnValue(false);
    const domain = faker.internet.domainName();
    expect(getSite(domain)).toBeNull();
  });
});
