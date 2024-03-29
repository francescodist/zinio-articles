import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import ArticlesView from "./components/articles-view";
import styled from "styled-components";

function App() {
  return (
      <AppView>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/articles"  component={ArticlesView} />
                  <Redirect to="/articles" />
              </Switch>
          </BrowserRouter>
      </AppView>
  );
}

const AppView = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
`;

export default App;
