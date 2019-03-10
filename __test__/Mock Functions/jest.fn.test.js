const MyMock = jest.fn();

const a = new MyMock(); /* eslint-disable-line */
const b = { value: 1 };
const bound = MyMock.bind(b);
bound();

console.log(MyMock.mock);
// [ mockConstructor {}, { value: 1 } ]

test('', () => {
  expect(MyMock.mock.instances.length === 2).toBeTruthy();
});
