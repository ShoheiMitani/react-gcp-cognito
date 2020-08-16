import * as React from 'react';
import Amplify from 'aws-amplify';
import awsConfiguration from '../awsConfiguration'
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { customeTheme } from '../layout';
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
    backgroundColor: '#faf3dd',
    flexGrow: 1
  },
  appbar: {
    alignItems: 'center',
  },
  toolbar: {
    minHeight: '48px'
  }
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={customeTheme}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
          >
            Cognito Authentication With React Admin
          </Typography>
        </Toolbar>
      </AppBar>
        <LoginGrid />
      </MuiThemeProvider>
    </div>
  )
};

export default LoginPage;
