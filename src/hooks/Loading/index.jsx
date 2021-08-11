import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const loadingContext = {
  isLoading: false,
  setLoading: (bool) => bool,
};

const LoadingStateContext = createContext(loadingContext);

LoadingStateContext.displayName = 'LoadingStateContext';

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingStateContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingStateContext.Provider>
  );
};

const useLoading = () => useContext(LoadingStateContext);

export { useLoading };

export default LoadingProvider;

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
