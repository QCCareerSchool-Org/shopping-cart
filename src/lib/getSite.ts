import { isDesign, isEvent, isInternal, isMakeup, isPet, isWellness, isWriting } from '../lib/domains';

export type Site = 'internal' | 'makeup' | 'event' | 'design' | 'pet' | 'wellness' | 'writing';

export const getSite = (domain?: string): Site | null => {
  if (!domain) {
    return null;
  }
  if (isMakeup(domain)) {
    return 'makeup';
  } else if (isDesign(domain)) {
    return 'design';
  } else if (isEvent(domain)) {
    return 'event';
  } else if (isPet(domain)) {
    return 'pet';
  } else if (isWellness(domain)) {
    return 'wellness';
  } else if (isWriting(domain)) {
    return 'writing';
  } else if (isInternal(domain)) {
    return 'internal';
  } else {
    return null;
  }
};
