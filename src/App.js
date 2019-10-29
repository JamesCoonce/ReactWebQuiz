import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Home from "./screens/home";
import "./App.css";
import Quiz from "./screens/quiz";
import Results from "./screens/results";

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" render={props => <Quiz {...props} />} />
          <Route exact path="/results" render={props => <Results {...props} />} />
        </Switch>
    );
  }
}

export default App;
