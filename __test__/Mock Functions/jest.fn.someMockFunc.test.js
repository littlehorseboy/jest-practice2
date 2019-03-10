function returnParams(n1, n2, callback) {
  callback(n1, n2);
}

const someMockFunction = jest.fn();

returnParams(123, 456, someMockFunction);

console.log(someMockFunction.mock);

test('The function was called exactly once', () => {
  expect(someMockFunction.mock.calls.length).toBe(1);
});

test('The first arg of the first call to the function was "123"', () => {
  expect(someMockFunction.mock.calls[0][0]).toBe(123);
});

test('The second arg of the first call to the function was "456"', () => {
  expect(someMockFunction.mock.calls[0][1]).toBe(456);
});

test('The return value of the first call to the function was undefined', () => {
  expect(someMockFunction.mock.results[0].values).toBeUndefined();
});

const SomeMockFunction = jest.fn();
const a = new SomeMockFunction(); /* eslint-disable-line */

console.log(SomeMockFunction.mock);

test('This function was instantiated exactly twice', () => {
  expect(SomeMockFunction.mock.instances.length).toBe(1);
});

test('The object returned by the first instantiation of this function had a "name" property whose value was set to "test"', () => {
  expect(SomeMockFunction.mock.instances[0].name).toBeUndefined();
});
