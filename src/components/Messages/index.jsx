import React from 'react';

import { Snackbar } from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';

import { useMessages } from '../../hooks/Messages';

import { MessageContainer } from './styles';

const Messages = () => {
  const { messageAttrs, setMessageAttrs } = useMessages();

  return (
    <MessageContainer>
      {messageAttrs && (
        <Snackbar
          open={messageAttrs.show}
          autoHideDuration={6000}
          onClose={() =>
            setMessageAttrs({ show: false, severity: 'error', text: '' })
          }
        >
          <MuiAlert severity={messageAttrs.severity}>
            {messageAttrs.text}
          </MuiAlert>
        </Snackbar>
      )}
    </MessageContainer>
  );
};

export default Messages;
