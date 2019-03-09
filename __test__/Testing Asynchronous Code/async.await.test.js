function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve('peanut butter');
      } else {
        reject('error'); /* eslint-disable-line */
      }
    }, 1000);
  });
}

test('the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});
