import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ name }) => (
  <div>this is {name}</div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
