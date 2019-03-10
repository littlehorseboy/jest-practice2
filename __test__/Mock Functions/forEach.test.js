function forEach(item, callback) {
  for (let index = 0; index < item.length; index += 1) {
    callback(item[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);

forEach([3, 4], mockCallback);

console.log(mockCallback.mock);

test('The mock function is called twice', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});

test('The first argument of the first call to the function was 3', () => {
  expect(mockCallback.mock.calls[0][0]).toBe(3);
});

test('The first argument of the second call to the function was 4', () => {
  expect(mockCallback.mock.calls[1][0]).toBe(4);
});

test('The return value of the first call to the function was 45', () => {
  expect(mockCallback.mock.results[0].value).toBe(45);
});

test('The return value of the second call to the function was 46', () => {
  expect(mockCallback.mock.results[1].value).toBe(46);
});
