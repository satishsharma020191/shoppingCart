import { all, fork } from 'redux-saga/effects';
import { homeSaga } from './containers/home/saga';
import { plpSaga } from './containers/plp/saga';

/**
 * saga to yield all others
 */
export default function* rootSaga() {
  yield all([fork(homeSaga), fork(plpSaga)]);
}