import { put, call } from 'redux-saga/effects';
import axios from 'axios';

const getData = () => {
  return axios
    .post(`http://localhost:4000/getUpcomingSummary.do?pageNumber=0&pageSize=5`)
    .then((resp) => ({ resp }))
    .catch((err) => ({ err }));
};

// Worker Saga
function* getCall() {
  const { resp, err } = yield call(() => getData());
  if (resp) {
    yield put({
      type: 'GET_UPCOMING_SUMMARY_SUCCESS',
      payload: resp.data,
    });
  } else {
    console.log('userCallWorkboard error: ', err.message);
  }
}

export default getCall;
