import qs from 'qs';

export const dateOverride = (): Date | null => {
  if (window.location.hostname.includes('localhost')) {
    const parsed = qs.parse(window.location.search.slice(1));
    if (typeof parsed.date === 'string') {
      return new Date(parsed.date);
    }
    return null;
  }
  return null;
};
