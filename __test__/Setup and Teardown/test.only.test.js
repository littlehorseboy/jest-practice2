test.only('this will be the only test that runs', () => {
  expect(true).toBeTruthy();
});

test('this test will not run', () => {
  expect('a').toBe('a');
});
