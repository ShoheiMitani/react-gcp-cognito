import * as React from 'react';
import Amplify from 'aws-amplify';
import awsConfiguration from '../awsConfiguration'
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

import LoginGrid from './LoginGrid';

Amplify.configure({
  Auth: {
    identityPoolId: awsConfiguration.IdentityPoolId,
    region: awsConfiguration.Region,
    userPoolId: awsConfiguration.UserPoolId,
    userPoolWebClientId: awsConfiguration.ClientId,
    authenticationFlowType: 'USER_SRP_AUTH',
    mandatorySignIn: false,
    oauth: {
      domain: awsConfiguration.CognitoDomain,
      scope: ['email', 'profile', 'openid'],
      redirectSignIn: awsConfiguration.Domain,
      redirectSignOut: awsConfiguration.Domain,
      responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
    }
  }
});

const useStyles = makeStyles({
  root: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#F0EADA'
  },
});

const LoginPage = () => {
  const loginPageTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#1DD0B0"
      }
    },
    typography: {
      button: {
        textTransform: "none"
      }
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={loginPageTheme}>
        <LoginGrid />
      </MuiThemeProvider>
    </div>
  )
};

export default LoginPage;
