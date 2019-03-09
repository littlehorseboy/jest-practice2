let data = [];
let cnt = 0;
function init() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        data = [cnt + 1, cnt + 2, cnt + 3];
        cnt += 5;
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

// All 全部 test 之前執行一次
beforeAll(() => init());

// All 全部 test 結束執行一次
afterAll(() => {
  data = [];
});

test('data has 2', () => {
  expect(data.indexOf(2) !== -1).toBeTruthy();
});

test('data has 3', () => {
  expect(data.indexOf(3) !== -1).toBeTruthy();
});
