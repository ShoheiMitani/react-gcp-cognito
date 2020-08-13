let domain = process.env.REACT_APP_DOMAIN;
if(domain === undefined) {
    console.log('domain is undefined')
    domain = ''
}

let region = process.env.REACT_APP_AWS_REGION;
if(region === undefined) {
    console.log('region is undefined')
    region = ''
}

let poolId = process.env.REACT_APP_IDENTITY_POOL_ID;
if(poolId === undefined) {
    console.log('poolId is undefined')
    poolId = ''
}

let userPoolId = process.env.REACT_APP_USER_POOL_ID;
if(userPoolId === undefined) {
    console.log('userPoolId is undefined')
    userPoolId = ''
}

let clientId = process.env.REACT_APP_CLIENT_ID;
if(clientId === undefined) {
    console.log('clientId is undefined')
    clientId = ''
}

let cognitoDomain = process.env.REACT_APP_COGNITO_DOMAIN;
if(cognitoDomain === undefined) {
    console.log('cognitoDomain is undefined')
    cognitoDomain = ''
}

const awsConfiguration = {
  Domain: domain,
  Region: region,
  IdentityPoolId: poolId,
  UserPoolId: userPoolId,
  ClientId: clientId,
  CognitoDomain: cognitoDomain,
}

export default awsConfiguration