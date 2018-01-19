import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { addAction } from './../../data/actions';

const mapStateToProps = ({ Bicycle: { count } }) => {
  return {
    name: 'projectName',
    type: 'name',
    count,
  };
};

export default connect(mapStateToProps, {
  addAction,
})(Header);
