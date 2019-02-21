import { connect } from 'react-redux';

import { ShowList as ShowListComponent } from '../../components/ShowList';
import { loadShowList } from '../../actions/show';

const mapStateToProps = function(state) {
  return {
    list: state.show.list.data,
    error: state.show.list.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onInit: () => dispatch(loadShowList()),
  };
}

export const ShowList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowListComponent);
