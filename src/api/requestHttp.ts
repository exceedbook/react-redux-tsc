import axios from 'axios';
import get from 'lodash/get';

import * as util from '@/utils';


const instance = axios.create({
  baseURL: util.getBaseUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const IGNORED_UNAUTHORIZED_ROUTES = ['/auth', 'is_logged_in'];
const UNAUTHORIZED_STATUS = 401;

const handleUnauthorized = (error: object) => {
  const status = get(error, 'response.status');
  const url = get(error, 'request.responseURL', '');

  if (status === UNAUTHORIZED_STATUS && !IGNORED_UNAUTHORIZED_ROUTES.find(r => url.includes(r))) {
    
    window.location.reload();
  }
};

instance.interceptors.response.use(
  res => res,
  error => {
    handleUnauthorized(error);
    return Promise.reject({
      extended: get(error, 'response.data.error.extended', {}),
      message: get(error, 'response.data.error.message', error),
      code: get(error, 'response.data.error.errcode', 0),
    });
  }
);

export default instance;
