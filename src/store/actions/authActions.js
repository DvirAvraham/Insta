import {authService} from '../../services/auth.service.js';

export function checkAuth() {
  return async (dispatch) => {
    try {
      const loggedInUser = await authService.checkAuth();
      console.log('loggedInUser', loggedInUser);
      dispatch({type: 'LOGIN', loggedInUser});
    } catch (err) {
      console.error('Faild logging in:', err);
    }
  };
}
export function login(credentials) {
  return async (dispatch) => {
    try {
      const loggedInUser = await authService.login(credentials);
      if (!loggedInUser.token) throw new Error();
      dispatch({type: 'LOGIN', loggedInUser});
    } catch (err) {
      console.error('Faild logging in:', err);
    }
  };
}
