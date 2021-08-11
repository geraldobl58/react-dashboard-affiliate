import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

export const ModalCustomContext = createContext();

ModalCustomContext.displayName = 'ModalCustomContext';

const ModalCustomProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <ModalCustomContext.Provider
      value={{ modalOpen, setModalOpen, handleClickOpen, handleClose }}
    >
      {children}
    </ModalCustomContext.Provider>
  );
};

const useModal = () => useContext(ModalCustomContext);

export { useModal };

export default ModalCustomProvider;

ModalCustomProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
