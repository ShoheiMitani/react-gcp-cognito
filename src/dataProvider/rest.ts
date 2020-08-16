import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'react-admin';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';

const AuthToken = {
  setHeader: async (url: string, options: any) =>{
    if(options === undefined) {
      options = { headers: new Headers({ Accept: 'application/json' }) };
    }

    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }

    const userWithoutCast = await Auth.currentAuthenticatedUser();
    const user = userWithoutCast as CognitoUser;
    const userSession = user.getSignInUserSession();
    const idToken = (userSession) ? userSession.getIdToken() : null;
    const jwtToken = (idToken) ? idToken.getJwtToken() : null;

    console.log(userWithoutCast)
    options.headers.set('Auth-Type','Token');
    options.headers.set('Authorization', `Bearer ${jwtToken}`);

    return fetchUtils.fetchJson(url, options);
  }
}

const DataProvider = jsonServerProvider('http://localhost:3000', AuthToken.setHeader);

export default DataProvider;