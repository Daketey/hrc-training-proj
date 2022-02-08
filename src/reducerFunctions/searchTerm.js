const searchTerm = (state = { searchTerm: null }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export default searchTerm;
