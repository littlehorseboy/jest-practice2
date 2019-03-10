import axios from 'axios';

class Users {
  static all() {
    return axios.get('./user.json').then(response => response.data);
  }
}

export default Users;
