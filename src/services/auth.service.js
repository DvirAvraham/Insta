import {httpService} from './http-service';

const login = async (credentials) => {
  return await httpService.post(`auth/login`, credentials);
};
const signup = async (credentials) => {
  return await httpService.post(`auth/signup`, credentials);
};

export const authService = {
  login,
  signup,
};
