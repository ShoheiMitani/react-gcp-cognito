const awsConfiguration = {
  Domain: process.env.REACT_APP_DOMAIN || '',
  Region: process.env.REACT_APP_AWS_REGION || '',
  IdentityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID || '',
  UserPoolId: process.env.REACT_APP_USER_POOL_ID || '',
  ClientId: process.env.REACT_APP_CLIENT_ID || '',
  CognitoDomain: process.env.REACT_APP_COGNITO_DOMAIN || '',
}

export default awsConfiguration