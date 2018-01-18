import { connect } from 'react-redux';
import Header from '../../components/Header';

const mapStateToProps = ({ projectName }) => {
  return {
    name: projectName,
  };
};
export default connect(mapStateToProps)(Header);
