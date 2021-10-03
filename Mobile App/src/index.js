import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Card1 from './card'
import Register from './Register'
import Dashboard from './dashboard'

// import * as serviceWorker from '../src/serviceworker';
// import './index.css';

class App extends React.Component {

    state={}

    
    render() {
      return (
          <React.Fragment>
          <BrowserRouter>
          <Switch>
            <Route exact path="/">
                <Register/>
            </Route>
            <Route path="/admin" component={Dashboard}>
            </Route>
          </Switch>
          </BrowserRouter>
    </React.Fragment>
      )
  }
}

ReactDOM.render(<App/>,document.querySelector("#root"));
// serviceWorker.unregister();