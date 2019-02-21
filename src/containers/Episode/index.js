import { connect } from 'react-redux';

import { Episode as EpisodeComponent } from '../../components/Episode';
import { loadEpisode } from '../../actions/show';

const mapStateToProps = function(state) {
  return {
    episode: state.show.episode.data,
    error: state.show.episode.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInit: (...params) => dispatch(loadEpisode(...params)),
  };
}

export const Episode = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EpisodeComponent);
