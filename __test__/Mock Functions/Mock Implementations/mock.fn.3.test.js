const myMockFn = jest
  .fn(() => 'default')
  .mockImplementationOnce(() => 'first call')
  .mockImplementationOnce(() => 'second call');

test('myMockFn() first call return "first call"', () => {
  expect(myMockFn()).toBe('first call');
});

test('myMockFn() second call return "second call"', () => {
  expect(myMockFn()).toBe('second call');
});

test('After myMockFn() second call, another call return "default"', () => {
  expect(myMockFn()).toBe('default');
});

test('After myMockFn() second call, another call return "default"', () => {
  expect(myMockFn()).toBe('default');
});

test('After myMockFn() second call, another call return "default"', () => {
  expect(myMockFn()).toBe('default');
});
