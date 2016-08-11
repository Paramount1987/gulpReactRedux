import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as actionCreators    from '../actions';
import Main                   from './Main';

function mapStateToProps(state) {
  return {
    product:  state.product,
    filter: state.filter
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
