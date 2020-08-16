import { createMuiTheme } from '@material-ui/core/styles';

export const customeTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1DD0B0",
      contrastText: '#fff'
    },
    secondary: {
      main: "#1DD0B0",
      contrastText: '#fff'
    },
    background: {
      default: '#FAF8F2',
    },
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});
