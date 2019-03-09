let arrayOne = [];

beforeEach(() => {
  arrayOne = [1, 2, 3];
});

test('arrayOne has 1', () => {
  expect(arrayOne.indexOf(1) !== -1).toBeTruthy();
});

test('arrayOne has 2', () => {
  expect(arrayOne.indexOf(2) !== -1).toBeTruthy();
});

describe('matching arrayOne to arrayTwo', () => {
  let arrayTwo = [];
  beforeEach(() => {
    arrayTwo = [2, 3, 4];
  });

  test('arrayOne has arrayTwo[0]', () => {
    expect(arrayOne.indexOf(arrayTwo[0]) !== -1).toBeTruthy();
  });

  test('arrayOne has arrayTwo[1]', () => {
    expect(arrayOne.indexOf(arrayTwo[1]) !== -1).toBeTruthy();
  });

  // test('arrayOne has arrayTwo[2]', () => {
  //   expect(arrayOne.indexOf(arrayTwo[2]) !== -1).toBeTruthy();
  // });
});
