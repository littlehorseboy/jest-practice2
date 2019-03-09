test('two plus three', () => {
  const value = 2 + 3;
  expect(value).toBeGreaterThan(4);
  expect(value).toBeGreaterThanOrEqual(5);
  expect(value).toBeLessThan(6);
  expect(value).toBeLessThanOrEqual(5.5);

  // toBe and toEqual are quivalent for numbers
  expect(value).toBe(5);
  expect(value).toEqual(5);
});
