import { authService } from '../../services/auth.service.js';

export function checkAuth() {
  return async (dispatch) => {
    try {
      const loggedInUser = await authService.checkAuth();
      console.log('loggedInUser', loggedInUser);
      dispatch({ type: 'LOGIN', loggedInUser });
    } catch (err) {
      console.error('Faild logging in:', err);
    }
  };
}
export function login(credentials) {
  return async (dispatch) => {
    try {
      const loggedInUser = await authService.login(credentials);
      console.log('loggedInUser:', loggedInUser);

      if (!loggedInUser.token) throw new Error();
      dispatch({ type: 'LOGIN', loggedInUser });
    } catch (err) {
      console.error('Faild logging in:', err);
    }
  };
}
export function signup(credentials) {
  return async (dispatch) => {
    try {
      console.log('credentials:', credentials);
      const loggedInUser = await authService.signup(credentials);
      console.log('loggedInUser:', loggedInUser);
      if (!loggedInUser.token) throw new Error();
      dispatch({ type: 'LOGIN', loggedInUser });
    } catch (err) {
      console.error('Faild signing up:', err);
    }
  };
}
