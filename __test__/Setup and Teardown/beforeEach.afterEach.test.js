let data = [];
// let cnt = 0;
function init() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        data = [1, 2, 3];
        // data = [cnt + 1, cnt + 2, cnt + 3];
        // cnt += 5;
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}

// Each 遇到每一個 test 就會執行一次
beforeEach(() => init());

afterEach(() => {
  data = [];
});

test('data has 2', () => {
  expect(data.indexOf(2) !== -1).toBeTruthy();
});

test('data has 3', () => {
  expect(data.indexOf(3) !== -1).toBeTruthy();
});
