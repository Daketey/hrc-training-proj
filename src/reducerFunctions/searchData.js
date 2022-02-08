const searchData = (state = { searchData: null }, action) => {
  const newState = action.payload;
  switch (action.type) {
    case 'GET_SEARCH_SUCCESS':
      return { searchData: newState };
    default:
      return state;
  }
};

export default searchData;
