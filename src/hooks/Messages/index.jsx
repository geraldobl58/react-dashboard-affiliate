import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const messageContext = {
  messageAtts: {
    show: false,
    text: null,
    severity: null,
  },
};

const MessageStateContext = createContext(messageContext);

MessageStateContext.displayName = 'MessagesStateContext';

const MessageProvider = ({ children }) => {
  const [messageAttrs, setMessageAttrs] = useState(null);

  return (
    <MessageStateContext.Provider value={{ messageAttrs, setMessageAttrs }}>
      {children}
    </MessageStateContext.Provider>
  );
};

const useMessages = () => useContext(MessageStateContext);

export { useMessages };

export default MessageProvider;

MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
