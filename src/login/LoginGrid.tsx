import * as React from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../logo.svg'
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

const useStyles = makeStyles({
  root: {
    maxWidth: '85%'
  },
  avator: {
    borderRadius: '0%',
    backgroundColor: 'inherit'
  },
  title: {
    fontSize: 14,
  },
  cardAction: {
    justifyContent: 'center',
    paddingBottom: 30
  },
  button: {
    width: '90%',
    color: 'white'
  }
});

const LoginGrid = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3} className={classes.root}>
        <Card>
          <CardHeader
            avatar={
              <Avatar className={classes.avator} aria-label="recipe">
                <img src={logo} className="App-logo" alt="logo"/>
              </Avatar>
            }
            title="Single Sign-On"
          />
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Please sign in with your @example.com account
            </Typography>
          </CardContent>
          <CardActions className={classes.cardAction}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
              className={classes.button}
            >
              Sign In With Google
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
};

export default LoginGrid;