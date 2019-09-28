import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MagazinesView from "./components/magazines-view";
import styled from "styled-components";

function App() {
  return (
      <AppView>
          <Switch>
              <Route exact path="/magazines"  component={MagazinesView} />
              <Redirect to="/magazines" />
          </Switch>
      </AppView>
  );
}

const AppView = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
`;

export default App;
