const userProfile = (state = { userProfile: null }, action) => {
  const newState = action.payload;
  switch (action.type) {
    case 'GET_PROFILE_SUCCESS':
      return { userProfile: newState };
    default:
      return state;
  }
};

export default userProfile;
