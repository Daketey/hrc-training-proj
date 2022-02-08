const idCheck = (state = { idCheck: null }, action) => {
  switch (action.type) {
    case 'SEND_ID':
      return { ...state, idCheck: action.payload };
    default:
      return state;
  }
};

export default idCheck;
