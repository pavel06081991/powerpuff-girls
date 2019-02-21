import {
  LOAD_SHOW,
  LOAD_SHOW_SUCCEEDED, 
  LOAD_SHOW_FAILED,
  LOAD_SHOW_LIST,
  LOAD_SHOW_LIST_SUCCEEDED, 
  LOAD_SHOW_LIST_FAILED,
  LOAD_EPISODE,
  LOAD_EPISODE_SUCCEEDED, 
  LOAD_EPISODE_FAILED,
} from '../constants/show';

export const loadShow = (showId) => ({
  type: LOAD_SHOW,
  payload: { showId },
});

export const loadShowSucceeded = (show) => ({
  type: LOAD_SHOW_SUCCEEDED,
  payload: show,
});

export const loadShowFaild = () => ({
  type: LOAD_SHOW_FAILED,
});

export const loadShowList = () => ({
  type: LOAD_SHOW_LIST,
});

export const loadShowListSucceeded = (showList) => ({
  type: LOAD_SHOW_LIST_SUCCEEDED,
  payload: showList,
});

export const loadShowListFaild = () => ({
  type: LOAD_SHOW_LIST_FAILED,
});

export const loadEpisode = (showId, seasonId, episodeId) => ({
  type: LOAD_EPISODE,
  payload: { showId, seasonId, episodeId },
});

export const loadEpisodeSucceeded = (episode) => ({
  type: LOAD_EPISODE_SUCCEEDED,
  payload: episode,
});

export const loadEpisodeFaild = () => ({
  type: LOAD_EPISODE_FAILED,
});