import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

const ButtonCustom = ({ children, color }) => {
  return (
    <Button variant="contained" color={color} component={Link} to="/">
      {children}
    </Button>
  );
};

ButtonCustom.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default ButtonCustom;
