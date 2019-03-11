const myObj = {
  myMethod: jest.fn().mockReturnThis(),
};

const otherObj = {
  myMethod: jest.fn(function () {
    return this;
  }),
};

test('otherObj equal myObj', () => {
  expect(JSON.stringify(myObj)).toEqual(JSON.stringify(otherObj));
});

console.log(JSON.stringify(myObj));
