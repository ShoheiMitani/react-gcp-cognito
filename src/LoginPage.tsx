import * as React from 'react';
import Amplify, { Auth, Hub } from 'aws-amplify';
import awsConfiguration from './awsConfiguration'
import { ThemeProvider } from '@material-ui/styles';

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

const LoginPage = (theme: any) => {
  return (
      <div>
        <p>User: None</p>
        <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
      </div>
  )
}

export default LoginPage;