const getUpcomingSummary = (state = { getUpcomingSummary: null }, action) => {
  const newState = action.payload;
  switch (action.type) {
    case 'GET_UPCOMING_SUMMARY_SUCCESS':
      return { getUpcomingSummary: newState };
    default:
      return state;
  }
};

export default getUpcomingSummary;
