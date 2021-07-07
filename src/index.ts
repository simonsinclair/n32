const n32 = (number: number): string => {
  const SYMBOLS = '0123456789abcdefghjkmnpqrstvwxyz';
  const BASE = 32;
  let m = '';
  let n = number;

  while (n > 0) {
    m = SYMBOLS.charAt(n % BASE) + m;
    n = Math.trunc(n / BASE);
  }

  return m;
};

export default n32;
