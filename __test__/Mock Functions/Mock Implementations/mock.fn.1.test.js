const myMockFn = jest.fn(cb => cb(null, true));

test('myMockFn callback is true', () => {
  expect(myMockFn((err, val) => val)).toBeTruthy();
});
