import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './App';
import theme from './theme';
import MessageProvider from './hooks/Messages';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MessageProvider>
      <CssBaseline />
      <App />
    </MessageProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
