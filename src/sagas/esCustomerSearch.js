import { put, call, select, delay } from 'redux-saga/effects';
import axios from 'axios';

const getData = (name) => {
  return axios
    .post(`http://localhost:4000/esCustomerSearch.do`, {
      customerName: name,
    })
    .then((resp) => ({ resp }))
    .catch((err) => ({ err }));
};

const searchTerm = (state) => state.searchTerm;
// Worker Saga
function* getCall() {
  yield delay(500);
  const data = yield select(searchTerm);
  try {
    const { resp, err } = yield call(() => getData(data.searchTerm));
    if (resp) {
      yield put({
        type: 'GET_SEARCH_SUCCESS',
        payload: resp.data,
      });
    } else {
      console.log('userCallWorkboard error: ', err.response.data);
    }
  } catch {
    console.log('ërror');
  }
}

export default getCall;
