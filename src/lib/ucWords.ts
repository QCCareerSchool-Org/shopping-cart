export const ucWords = (str: string): string => str.replace(/^(.)|\s+(.)/gu, s => s.toLocaleUpperCase());
