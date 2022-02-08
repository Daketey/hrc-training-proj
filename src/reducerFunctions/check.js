const check = (state = { check: false }, action) => {
  switch (action.type) {
    case 'CHECK':
      return { check: action.payload };
    default:
      return state;
  }
};

export default check;
