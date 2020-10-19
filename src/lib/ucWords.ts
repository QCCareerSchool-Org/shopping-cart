export const ucWords = (str: string) => str.replace(/^(.)|\s+(.)/g, s => s.toLocaleUpperCase());
