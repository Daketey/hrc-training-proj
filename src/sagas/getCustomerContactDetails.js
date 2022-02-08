import { put, call, select } from 'redux-saga/effects';
import axios from 'axios';

const getData = (id) => {
  return axios
    .post(`http://localhost:4000/getCustomerContactDetails.do?customerId=${id}`)
    .then((resp) => ({ resp }))
    .catch((err) => ({ err }));
};

// Worker Saga
function* getCall() {
  const id = yield select((state) => state.idCheck);
  const { resp, err } = yield call(() => getData(id.idCheck));
  if (resp) {
    yield put({
      type: 'GET_DETAIL_SUCCESS',
      payload: resp.data,
    });
  } else {
    console.log('userCallWorkboard error: ', err.message);
  }
}

export default getCall;
