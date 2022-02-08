const getUserCall = (state = { getUserCall: null }, action) => {
  const newState = action.payload;
  switch (action.type) {
    case 'GET_USER_CALL_SUCCESS':
      return { getUserCall: newState };
    default:
      return state;
  }
};

export default getUserCall;
