import React from 'react';
import './App.css';
import { connect } from "react-redux";
import Login from './pages/login';

function App(props:any) {
  return (
    <>
      <Login />
    </>
  );
}

export default connect(state => ({
  state
}), dispatch => ({
  add: () => dispatch({type: 'INCREMENT_ASYNC'})
}))(App);
