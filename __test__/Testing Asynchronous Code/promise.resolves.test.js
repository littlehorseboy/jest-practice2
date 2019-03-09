function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve('peanut butter');
      } else {
        reject();
      }
    }, 1000);
  });
}

test(
  'the data is peanut butter',
  () => expect(fetchData()).resolves.toBe('peanut butter'),
);
