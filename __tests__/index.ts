import n32 from '../dist';

describe('n32', () => {
  it('returns a valid string', () => {
    expect(n32(12345)).toBe('c1s');
  });
});
