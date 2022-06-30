import {httpService} from './http-service';
import {storageService} from './storage.service';
import jwtDecode from 'jwt-decode';

const login = async (credentials) => {
  const res = await httpService.post(`auth/login`, credentials);
  if (res.token) storageService.save('jwtToken', res.token);
  return res;
};
const signup = async (credentials) => {
  return await httpService.post(`auth/signup`, credentials);
};

const checkAuth = async () => {
  const token = localStorage.getItem('jwtToken');
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken');
    return false;
  } else return {...decodedToken, token};
};

export const authService = {
  login,
  signup,
  checkAuth,
};
