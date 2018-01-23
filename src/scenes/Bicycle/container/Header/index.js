import { connect } from 'react-redux';
import Header from '../../components/Header';
import { addAction, reduceAction } from './../../data/actions';


const mapStateToProps = ({ Bicycle: { count } }) => {
  return {
    name: 'projectName',
    type: 'name',
    count,
  };
};

export default connect(mapStateToProps, {
  addAction,
  reduceAction,
})(Header);
