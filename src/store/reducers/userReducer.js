const INITIAL_STATE = {
  users: null,
};

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
}
