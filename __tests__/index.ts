import n32, { n32decode, getSymbol, getSymbolValue } from '../dist';

describe('n32', () => {
  it('returns a valid string', () => {
    expect(n32(0)).toBe('0');
    expect(n32(31)).toBe('z');
    expect(n32(32)).toBe('10');
    expect(n32(1035280)).toBe('zk0g');
    expect(n32(Number.MAX_SAFE_INTEGER)).toBe('7zzzzzzzzzz');
  });
  it('throws an error', () => {
    expect(() => n32(-1)).toThrowError('n32 expects an absolute number.');
  });
});

describe('n32decode', () => {
  it('returns a valid number', () => {
    expect(n32decode('0')).toBe(0);
    expect(n32decode('z')).toBe(31);
    expect(n32decode('10')).toBe(32);
    expect(n32decode('0zk0g')).toBe(1035280);
    expect(n32decode('7zzzzzzzzzz')).toBe(Number.MAX_SAFE_INTEGER);
  });
});

describe('getSymbol', () => {
  it('returns a valid symbol', () => {
    expect(getSymbol(0)).toBe('0');
    expect(getSymbol(9)).toBe('9');
    expect(getSymbol(10)).toBe('a');
    expect(getSymbol(31)).toBe('z');
  });
  it('throws an error', () => {
    expect(() => getSymbol(32)).toThrowError(
      '"index" exceeds the length of symbols available.',
    );
  });
});

describe('getSymbolValue', () => {
  it('returns a valid symbol value', () => {
    expect(getSymbolValue('0')).toBe(0);
    expect(getSymbolValue('9')).toBe(9);
    expect(getSymbolValue('a')).toBe(10);
    expect(getSymbolValue('z')).toBe(31);
  });
});
