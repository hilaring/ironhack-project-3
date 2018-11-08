import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000',
      // https://imedic-ih.herokuapp.com
      withCredentials: true
    })
  }

  signup(user) {
    const { username, name, lastname, email, password } = user;
    return this.auth.post('/auth/signup', {username, name, lastname, email, password})
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/auth/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/auth/logout', {})
      .then(response => response.data)
  }

  me(user) {
    return this.auth.get('/auth/me')
    .then(response => response.data)
  }
}

const auth = new Auth();

export default auth