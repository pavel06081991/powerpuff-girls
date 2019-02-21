import {
  LOAD_SHOW_LIST_SUCCEEDED,
  LOAD_SHOW_LIST_FAILED,
  LOAD_SHOW_SUCCEEDED,
  LOAD_SHOW_FAILED,
  LOAD_EPISODE_SUCCEEDED,
  LOAD_EPISODE_FAILED,
} from '../constants/show';

export const show = (state = {
  list: {
    data: null,
    error: false,
  },
  details: {
    data: {
      show: null,
      episodes: [],
    },
    error: false,
  },
  episode: {
    data: null,
    error: false,
  },
}, action) => {
  switch (action.type) {
    case LOAD_SHOW_LIST_SUCCEEDED:
      return {
        ...state,
        list: {
          data: action.payload,
          error: false,
        },
      };
    case LOAD_SHOW_LIST_FAILED:
      return {
        ...state,
        list: {
          error: true,
        },
      };
    case LOAD_SHOW_SUCCEEDED:
      return {
        ...state,
        details: {
          data: action.payload,
          error: false,
        },
      };
    case LOAD_SHOW_FAILED:
      return {
        ...state,
        details: {
          error: true,
        },
      };
    case LOAD_EPISODE_SUCCEEDED:
      return {
        ...state,
        episode: {
          data: action.payload,
          error: false,
        },
      };
    case LOAD_EPISODE_FAILED:
      return {
        ...state,
        episode: {
          error: true,
        },
      };
    default:
      return state;
  }
}
