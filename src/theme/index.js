import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';

const theme = createMuiTheme(
  {
    palette: {
      common: {
        black: '#040D1A',
        white: '#FFF',
      },
      primary: {
        ligth: '#4791db',
        main: '#1976d2',
        dark: '#115293',
        contrastText: '#FFF',
      },
      secondary: {
        light: '#e33371',
        main: '#dc004e',
        dark: '#9a0036',
        contrastText: '#FFF',
      },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#FFF',
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: 'rgba(4, 13, 26, 0.96)',
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#FFF',
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: 'rgba(4, 13, 26, 0.96)',
      },
    },
    props: {
      MuiTextField: {
        variant: 'outlined',
        fullWidth: true,
      },
      MuiSelect: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
  },
  ptBR
);

export default theme;
