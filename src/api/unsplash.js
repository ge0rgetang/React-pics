import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID f484808681ad0ab481c9fce24e055971895a84a8ca6a5d7d79ae4deb5f81f4a4'
  }
});
