const myMock = jest.fn();
console.log(myMock());

myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock(), myMock())

test('第一次 myMock() 回傳 10', () => {
  expect(myMock()).toBe(10);
});

for (let i = 1; i < 6; i += 1) {
  if (i === 1) {
    test(`迴圈第 ${i} 次 myMock() 回傳 'x'`, () => {
      expect(myMock()).toBe('x');
    });
  } else {
    test(`迴圈第 ${i} 次 myMock() 回傳 true`, () => {
      expect(myMock()).toBeTruthy();
    });
  }
}
