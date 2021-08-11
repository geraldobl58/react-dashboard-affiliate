import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import theme from './theme';

import MessageProvider from './hooks/Messages';
import LoadingProvider from './hooks/Loading';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MessageProvider>
      <LoadingProvider>
        <CssBaseline />
        <App />
      </LoadingProvider>
    </MessageProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
