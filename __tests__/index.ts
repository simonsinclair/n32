import n32, { getSymbol } from '../dist';

describe('n32', () => {
  it('returns a valid string', () => {
    expect(n32(0)).toBe('0');
    expect(n32(31)).toBe('z');
    expect(n32(32)).toBe('10');
    expect(n32(Number.MAX_SAFE_INTEGER)).toBe('7zzzzzzzzzz');
  });
  it('throws an error', () => {
    expect(() => n32(-1)).toThrowError('n32 expects an absolute number.');
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
