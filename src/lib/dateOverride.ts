import qs from 'qs';

const internalDomains = [
  /^(?:.+\.)*localhost$/u,
  /^(?:.+\.)*enrolltest.qccareerschool.com$/u,
  /^(?:.+\.)*vercel.app$/u,
];

export const dateOverride = (): Date | null => {
  if (internalDomains.some(regExp => regExp.test(window.location.hostname))) {
    const parsed = qs.parse(window.location.search.slice(1));
    if (typeof parsed.date === 'string') {
      return new Date(parsed.date);
    }
    return null;
  }
  return null;
};
