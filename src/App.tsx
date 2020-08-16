import React from 'react';
import { Admin, Resource } from 'react-admin';
import users from './users';
import AuthProvider from './authProvider'
import LoginPage from './login';
import DataProvider from './dataProvider';
import Layout, { customeTheme } from './layout';

import './App.css';

const App: React.FC = () => {
  return (
    <Admin
      theme={customeTheme}
      dataProvider={DataProvider}
      loginPage={LoginPage}
      authProvider={AuthProvider}
      layout={Layout}
    >
      <Resource name="users" {...users} />
    </Admin>
  )
};

export default App;
