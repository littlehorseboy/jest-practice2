test('empty would pass', () => {

});

test('the data is peanut butter', () => {
  function callbackString(data) {
    expect(data).toBe('peanut butter');
  }

  setTimeout(callbackString('peanut butter'));
});

test('the data is peanut butter', (done) => {
  function callbackString(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  setTimeout(callbackString('peanut butter'));
});
