import axios from 'axios';

const tvmazeApi = axios.create({
  baseURL: 'http://api.tvmaze.com',
});

export class TvmazeApi {
  static loadShowList() {
    return tvmazeApi.get('/search/shows?q=girls');
  }
  static loadShow(showId) {
    return tvmazeApi.get(`/shows/${showId}`);
  }
  static loadEpisodes(showId) {
    return tvmazeApi.get(`/shows/${showId}/episodes`);
  }
  static loadEpisode(showId, seasonId, episodeId) {
    return tvmazeApi.get(`/shows/${showId}/episodebynumber?season=${seasonId}&number=${episodeId}`);
  }
}
