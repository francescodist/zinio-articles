import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import MagazinesView from "./components/magazines-view";

function App() {
  return (
      <Switch>
          <Route exact path="/magazines"  component={MagazinesView} />
          <Redirect to="/magazines" />
      </Switch>
  );
}

export default App;
