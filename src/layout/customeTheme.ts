import { createMuiTheme } from '@material-ui/core/styles';

export const customeTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#68b0ab",
      contrastText: '#fff'
    },
    secondary: {
      main: "#68b0ab",
      contrastText: '#fff'
    },
    background: {
      default: '#faf3dd',
    },
  },
  typography: {
    button: {
      textTransform: "none"
    }
  }
});
