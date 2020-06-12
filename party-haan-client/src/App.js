import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import CreateUserPage from './pages/CreateUserPage';
import CreatePartyPage from './pages/CreatePartyPage';
import LoginPage from './pages/LoginPage';
import PartyListPage from './pages/PartyListPage';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CreateUserPage path="/createUser" />
        <CreatePartyPage path="/createParty" />
        <LoginPage path="/login" />
        <PartyListPage path="/" />
      </Router>
    </Provider>
  );
}

export default App;
