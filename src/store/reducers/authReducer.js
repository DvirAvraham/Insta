const INITIAL_STATE = {
  loggedInUser: null,
};

export function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        loggedInUser: action.loggedInUser,
      };

    default:
      return state;
  }
}
