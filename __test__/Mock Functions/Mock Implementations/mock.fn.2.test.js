const myMockFn = jest
  .fn()
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

test('myMockFn first call return true', () => {
  expect(myMockFn((err, val) => val)).toBeTruthy();
});

test('myMockFn second call return false', () => {
  expect(myMockFn((err, val) => val)).toBeFalsy();
});
