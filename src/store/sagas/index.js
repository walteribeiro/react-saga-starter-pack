import { all, takeLatest } from 'redux-saga/effects';
import { Types as FirstTypes } from '../ducks/firstDuck';
import { firstSaga } from './firstSaga';

export default function* rootSaga() {
  yield all([takeLatest(FirstTypes.REQUEST, firstSaga)]);
}
