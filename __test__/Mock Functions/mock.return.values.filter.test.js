const filterTestFn = jest.fn();

filterTestFn
  .mockReturnValueOnce(true)
  .mockReturnValueOnce(false);

const result = [11, 12].filter(filterTestFn);

test('result.length === 1', () => {
  expect(result.length).toBe(1);
});

test('result contain 11 and not contain 12', () => {
  expect(result).toContain(11);
  expect(result).not.toContain(12);
});

test('result equal [11] and not equal [11, 12]', () => {
  expect(result).toEqual([11]);
  expect(result).not.toEqual([11, 12]);
});

console.log(filterTestFn.mock);
