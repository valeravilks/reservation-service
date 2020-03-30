import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

function App(props:any) {
  console.log(props);
  return (
    <div className="App">
      <header onClick={() => {props.add()}} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>{props.state.login.name}</div>
      </header>
    </div>
  );
}

export default connect(state => ({
  state
}), dispatch => ({
  add: () => dispatch({type: 'ADD', name: 'sdfsdf'})
}))(App);
