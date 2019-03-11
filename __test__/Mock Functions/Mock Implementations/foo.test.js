jest.mock('../../../src/Mock Implementations/foo');
const foo = require('../../../src/Mock Implementations/foo');

foo.mockImplementation(() => 42);

test('foo() return 42', () => {
  expect(foo()).toBe(42);
});
