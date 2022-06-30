import {authService} from '../../services/auth.service.js';

export function login(credentials) {
  return async (dispatch) => {
    try {
      const loggedInUser = await authService.login(credentials);
      console.log(loggedInUser, 'loggedInUser');
      if (!loggedInUser.token) throw new Error();
      dispatch({type: 'LOGIN', loggedInUser});
    } catch (err) {
      console.error('Faild logging in:', err);
    }
  };
}
