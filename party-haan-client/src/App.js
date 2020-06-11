import React from 'react';
import { Router } from '@reach/router';
import CreateUserPage from './pages/CreateUserPage';
import CreatePartyPage from './pages/CreatePartyPage';
import LoginPage from './pages/LoginPage';
import PartyListPage from './pages/PartyListPage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <CreateUserPage path="/createUser" />
      <CreatePartyPage path="/createParty" />
      <LoginPage path="/login" />
      <PartyListPage path="/" />
    </Router>
  );
}

export default App;
