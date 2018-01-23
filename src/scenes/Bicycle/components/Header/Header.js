import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  name, type, count, addAction, reduceAction,
}) => (
  <div>
    <div onClick={addAction}>this is {name}</div>
    <div onClick={reduceAction}>type: {type}</div>
    <div>{count}</div>
  </div>
);


Header.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  addAction: PropTypes.func.isRequired,
  reduceAction: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Header;
