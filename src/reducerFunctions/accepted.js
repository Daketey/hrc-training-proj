const accepted = (state = { accpeted: false }, action) => {
  switch (action.type) {
    case 'CALL_STATUS':
      return { accepted: action.payload };
    default:
      return state;
  }
};

export default accepted;
