import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import authProvider from './authProvider'
import LoginPage from './LoginPage';
import jsonServerProvider from 'ra-data-json-server';

import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: React.FC = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      loginPage={LoginPage}
      authProvider={authProvider}
    >
      <Resource name="users" list={UserList} />
    </Admin>
  )
};

export default App;
