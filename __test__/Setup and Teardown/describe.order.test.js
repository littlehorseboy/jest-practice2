describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');

    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toBeTruthy();
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toBeTruthy();
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');

    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(true).toBeTruthy();
    });
  });

  console.log('describe outer-c');
});
