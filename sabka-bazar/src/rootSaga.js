//import { fork, all } from 'redux-saga/effects';
//import homeSaga from './containers/home/saga';
//import secondSaga from './secondSaga';
//import thirdSaga from './thirdSaga';

import { all } from 'redux-saga/effects';
import { homeSaga } from './containers/home/saga';
//import { modelSaga } from './modelSaga';
//import { logicSaga } from './logicSaga';
//import { sampleSaga } from './sampleSaga';

/**
 * saga to yield all others
 */
export default function* rootSaga() {
  yield all([...homeSaga]);
}