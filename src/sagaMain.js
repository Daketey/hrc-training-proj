import { takeLatest, takeEvery } from 'redux-saga/effects';
import getUserCallWorkbook from './sagas/getUserCallWorkbook';
import getUpcomingSummary from './sagas/getUpcomingSummary';
import esCustomerSearch from './sagas/esCustomerSearch';
import getUserProfile from './sagas/getUserProfile';
import getCustomerContactDetails from './sagas/getCustomerContactDetails';

// Watcher Saga
export default function* sagaMain() {
  yield takeLatest('GET_USER_CALL', getUserCallWorkbook);
  yield takeLatest('GET_UPCOMING_SUMMARY', getUpcomingSummary);
  yield takeLatest('GET_SEARCH_DATA', esCustomerSearch);
  yield takeEvery('GET_PROFILE', getUserProfile);
  yield takeLatest('GET_DETAILS', getCustomerContactDetails);
}
