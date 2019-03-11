import axios from 'axios';
import Users from '../../../src/Mocking Modules/Users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [
    {
      name: 'Bob',
    },
  ];
  const response = {
    data: users,
  };

  axios.get.mockResolvedValue(response);

  return Users.all()
    .then((res) => {
      expect(res.data).toEqual(users);
    });
});
