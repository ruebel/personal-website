import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
