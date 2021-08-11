import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from '@material-ui/core';

import { LoadingContainer } from './styles';

const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <LoadingContainer>
        <CircularProgress color="secondary" />
      </LoadingContainer>
    )
  );
};

export default Loading;

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
