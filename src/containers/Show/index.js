import { connect } from 'react-redux';

import { Show as ShowComponent } from '../../components/Show';
import { loadShow } from '../../actions/show';

const mapStateToProps = function(state) {
  return {
    details: state.show.details.data,
    error: state.show.details.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInit: (showId) => dispatch(loadShow(showId)),
  };
}

export const Show = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowComponent);
