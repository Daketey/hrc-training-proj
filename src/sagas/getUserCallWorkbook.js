import { put, call, select } from 'redux-saga/effects';
import axios from 'axios';

const getData = (page) => {
  return axios
    .post(
      `http://localhost:4000/getUserCallWorkbook.do?pageNumber=${page}&pageSize=5`
    )
    .then((resp) => ({ resp }))
    .catch((err) => ({ err }));
};

const pageNumber = (state) => state.pageNumber;
// Worker Saga
function* getCall() {
  const page = yield select(pageNumber);
  const { resp, err } = yield call(() => getData(page.pageNumber, 5));
  console.log(resp.data);
  if (resp) {
    yield put({
      type: 'GET_USER_CALL_SUCCESS',
      payload: resp.data,
    });
  } else {
    console.log('userCallWorkboard error: ', err.message);
  }
}

export default getCall;
