export const getSymbol = (index: number): string => {
  const SYMBOLS = '0123456789abcdefghjkmnpqrstvwxyz';
  if (index > SYMBOLS.length - 1) {
    throw new Error('"index" exceeds the length of symbols available.');
  }
  return SYMBOLS.charAt(index);
};

const n32 = (number: number): string => {
  if (number < 32) return getSymbol(number);

  const BASE = 32;
  let m = '';
  let n = number;

  while (n > 0) {
    m = getSymbol(n % BASE) + m;
    n = Math.trunc(n / BASE);
  }

  return m;
};

export default n32;
