import React from 'react';
import './App.css';
import { connect } from "react-redux";
import Login from './pages/login';
import Main from './pages/main';
import Account from './pages/account';
import Registration from './pages/registration';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {history} from "./store";
import {ConnectedRouter, } from "connected-react-router";

function App(props:any) {
  return (
    <>
      <ConnectedRouter history={history}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Switch>
                <Route exact path='/'>
                  <Main />
                </Route>
                <Route path='/login'>
                  <Login />s
                </Route>
                <Route path='/account'>
                  <Account/>
                </Route>
                <Route path='/registration'>
                   <Registration/>
                </Route>
              </Switch>
          </BrowserRouter>
      </ConnectedRouter>
    </>
  );
}

export default connect(state => ({
  state
}), dispatch => ({
  add: () => dispatch({type: 'INCREMENT_ASYNC'})
}))(App);
