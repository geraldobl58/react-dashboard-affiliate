/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, Slide } from '@material-ui/core';

import { useModal } from '../../hooks/ModalCustom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ children }) => {
  const { modalOpen, handleClose } = useModal();

  return (
    <Dialog
      open={modalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      {children}
    </Dialog>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
