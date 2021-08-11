import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import theme from './theme';

import MessageProvider from './hooks/Messages';
import LoadingProvider from './hooks/Loading';
import ModalCustomProvider from './hooks/ModalCustom';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ModalCustomProvider>
      <MessageProvider>
        <LoadingProvider>
          <CssBaseline />
          <App />
        </LoadingProvider>
      </MessageProvider>
    </ModalCustomProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
