var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://65.52.163.204:8101/',
  /* other custom settings */
});

module.exports = axiosInstance;