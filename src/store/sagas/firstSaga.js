import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FirstActions } from '../ducks/firstDuck';

export function* firstSaga(action) {
  try {
    const { data } = yield call(api.get, `/ursl/${action}`);
    yield put(FirstActions.success(data));
  } catch (error) {
    console.log(error);
  }
}
