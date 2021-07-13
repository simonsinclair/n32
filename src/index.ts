export const getSymbol = (index: number): string => {
  const SYMBOLS = '0123456789abcdefghjkmnpqrstvwxyz';
  if (index > SYMBOLS.length - 1) {
    throw new Error('"index" exceeds the length of symbols available.');
  }
  return SYMBOLS.charAt(index);
};

export const getSymbolValue = (symbol: string): number => {
  return '0123456789abcdefghjkmnpqrstvwxyz'.search(symbol);
};

const n32 = (number: number): string => {
  if (number < 0) throw new Error('n32 expects an absolute number.');
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

export const n32decode = (n32: string): number => {
  const BASE = 32;
  let n = n32.length;
  let s = 0;

  while (n > 0) {
    n--;
    const symbol = n32[n32.length - n - 1];
    s = getSymbolValue(symbol) * BASE ** n + s;
  }

  return s;
};

export default n32;
