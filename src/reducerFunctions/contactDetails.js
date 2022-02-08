const contactDetails = (state = { contactDetails: null }, action) => {
  const newState = action.payload;
  switch (action.type) {
    case 'GET_DETAIL_SUCCESS':
      return { contactDetails: newState };
    default:
      return state;
  }
};

export default contactDetails;
