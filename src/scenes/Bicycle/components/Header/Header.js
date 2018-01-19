import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  name, type, count, addAction,
}) => (
  <div>
    <div onClick={addAction}>this is {name}</div>
    <div>type: {type}</div>
    <div>{count}</div>
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  addAction: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Header;
