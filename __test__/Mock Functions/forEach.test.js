function forEach(item, callback) {
  for (let index = 0; index < item.length; index += 1) {
    callback(item[index]);
  }
}

const mockCallback = jest.fn(x => 42 + x);
// console.log(mockCallback);
forEach([0, 1], mockCallback);
// console.log(mockCallback);
test('', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
});
