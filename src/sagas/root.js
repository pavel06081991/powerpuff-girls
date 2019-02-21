import { takeLatest, all } from 'redux-saga/effects';

import { LOAD_SHOW, LOAD_SHOW_LIST, LOAD_EPISODE } from '../constants/show';

import { loadShow, loadShowList, loadEpisode } from './show';

export const rootSaga = function *rootSaga() {
  yield all([
    yield takeLatest(LOAD_SHOW_LIST, loadShowList),
    yield takeLatest(LOAD_SHOW, loadShow),
    yield takeLatest(LOAD_EPISODE, loadEpisode),
  ]);
}