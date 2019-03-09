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
  () => {
    expect.assertions(1); // 驗證用了多少次斷言
    return fetchData()
      .then((data) => {
        expect(data).toBe('peanut butter');
      })
      .catch((error) => {
        expect(error).toMatch(/error/);
      });
  },
);
