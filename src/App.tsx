import React from 'react';
import { Admin, Resource } from 'react-admin';
import users from './users';
import AuthProvider from './authProvider'
import LoginPage from './login';
import DataProvider from './dataProvider';
import { createMuiTheme } from '@material-ui/core/styles';

import './App.css';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1DD0B0"
      }
    }
  });

  return (
    <Admin
      theme={theme}
      dataProvider={DataProvider}
      loginPage={LoginPage}
      authProvider={AuthProvider}
    >
      <Resource name="users" {...users} />
    </Admin>
  )
};

export default App;
