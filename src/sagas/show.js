import { call, put, all } from 'redux-saga/effects';

import { TvmazeApi } from '../api/tvmaze';
import {
  loadShowSucceeded,
  loadShowFaild,
  loadShowListSucceeded,
  loadShowListFaild,
  loadEpisodeSucceeded,
  loadEpisodeFaild,
} from '../actions/show';

export const loadShow = function* loadShow(action) {
  try {
    const [ show, episodes ] = yield all([
      call(TvmazeApi.loadShow, action.payload.showId),
      call(TvmazeApi.loadEpisodes, action.payload.showId),
    ]);
    yield put(loadShowSucceeded({ show: show.data, episodes: episodes.data }));
  } catch (e) {
    yield put(loadShowFaild());
  }
}

export const loadShowList = function* loadShowList(action) {
  try {
    const showList = yield call(TvmazeApi.loadShowList);
    yield put(loadShowListSucceeded(showList.data));
  } catch (e) {
    yield put(loadShowListFaild());
  }
}

export const loadEpisode = function* loadEpisode(action) {
  try {
    const episode = yield call(
      TvmazeApi.loadEpisode,
      action.payload.showId,
      action.payload.seasonId,
      action.payload.episodeId
    );
    yield put(loadEpisodeSucceeded(episode.data));
  } catch (e) {
    yield put(loadEpisodeFaild());
  }
}