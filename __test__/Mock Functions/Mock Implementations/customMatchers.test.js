const myMockFn = jest
  .fn()
  .mockReturnValue('default')
  .mockImplementation(scalar => 42 + scalar)
  .mockName('add42');

test('call myMockFn', () => {
  expect(myMockFn(5)).toBe(5 + 42);
  expect(myMockFn(6)).toBe(6 + 42);
});

test('toBeCalled()', () => {
  expect(myMockFn).toBeCalled();
});

test('toBeCalledWith()', () => {
  expect(myMockFn).toBeCalledWith(5);
  expect(myMockFn).toBeCalledWith(6);
});

test('lastCalledWith()', () => {
  // expect(myMockFn).lastCalledWith(5);
  expect(myMockFn).lastCalledWith(6);
});

test('toMatchSnapshot()', () => {
  expect(myMockFn).toMatchSnapshot();
});

test('myMockFn was called at least once', () => {
  expect(myMockFn.mock.calls.length).toBeGreaterThan(0);
});

test('myMockFn was called at least once with the specified args', () => {
  expect(myMockFn.mock.calls[0]).toContain(5);
  expect(myMockFn.mock.calls[1]).toContain(6);
});

test('The last call to the mock function was called with the specified args', () => {
  expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1]).toEqual([6]);
});

test('The first arg of the last call to the mock function was `6`', () => {
  expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1][0]).toBe(6);
});

test('The mock function calls was toEqual `[[5], [6]]`', () => {
  expect(myMockFn.mock.calls).toEqual([[5], [6]]);
});

test('The mock function MockName is `add42`', () => {
  expect(myMockFn.getMockName()).toBe('add42');
});
