function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        resolve('peanut butter');
      } else {
        reject('error'); /* eslint-disable-line */
      }
    }, 1000);
  });
}

test(
  'the fetch fails with an error',
  () => expect(fetchData()).rejects.toMatch('error'),
);
