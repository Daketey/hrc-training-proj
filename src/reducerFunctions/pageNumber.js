const pageNumber = (state = { pageNumber: 0 }, action) => {
  switch (action.type) {
    case 'FORWARD':
      return { ...state, pageNumber: state.pageNumber + 1 };
    case 'BACKWARD':
      return { ...state, pageNumber: state.pageNumber - 1 };
    default:
      return state;
  }
};

export default pageNumber;
