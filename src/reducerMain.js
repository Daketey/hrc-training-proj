/* eslint-disable object-shorthand */
import { combineReducers } from 'redux';
import getUserCall from './reducerFunctions/getUserCall';
import getUpcomingSummary from './reducerFunctions/getUpcomingSummary';
import pageNumber from './reducerFunctions/pageNumber';
import searchData from './reducerFunctions/searchData';
import searchTerm from './reducerFunctions/searchTerm';
import userProfile from './reducerFunctions/userProfile';
import contactDetails from './reducerFunctions/contactDetails';
import idCheck from './reducerFunctions/idCheck';
import check from './reducerFunctions/check';
import accepted from './reducerFunctions/accepted';
// We combine all the child reducer function into one function,
// in our main reducer function
export default combineReducers({
  getUserCall: getUserCall,
  getUpcomingSummary: getUpcomingSummary,
  pageNumber: pageNumber,
  searchData: searchData,
  searchTerm: searchTerm,
  userProfile: userProfile,
  contactDetails: contactDetails,
  idCheck: idCheck,
  check: check,
  accepted: accepted,
});
