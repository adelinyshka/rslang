const loggedReducer = (state = { logged: false }, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...action.user,
        logged: true,
      };
    case 'LOG_OUT':
      return {
        logged: false,
      };
    default:
      return state;
  }
};

export default loggedReducer;
