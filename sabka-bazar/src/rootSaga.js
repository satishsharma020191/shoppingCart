import { all, fork } from 'redux-saga/effects';
import { homeSaga } from './containers/home/saga';

/**
 * saga to yield all others
 */
export default function* rootSaga() {
  yield all([fork(homeSaga)]);
}