import httpService from './http-service';

const getUsers = async () => {
  return await httpService.get(`user`);
};

export const userService = {
  getUsers,
};
