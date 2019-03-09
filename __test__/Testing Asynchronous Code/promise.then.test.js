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
  () => fetchData().then((data) => {
    expect(data).toBe('peanut butter');
  }),
);
