import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'semantic-ui-react';

import Login from "./Login";
import Menu from "./Menu";

function App() {
  return (
    <Fragment>
      <Menu />
      <Container>
        <Login />
      </Container>
    </Fragment>
  );
}

export default App;
