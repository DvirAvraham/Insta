import {userService} from '../../services/user.service.js';

export function setUsers() {
  return async (dispatch) => {
    try {
      const users = await userService.getUsers();
      if (!users) throw new Error();
      dispatch({type: 'SET_USERS', users});
    } catch (err) {
      console.error('Faild setting users:', err);
    }
  };
}
