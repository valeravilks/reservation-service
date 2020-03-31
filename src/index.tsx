import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider} from "react-redux";
import Login from './pages/login';
import Firebase, { FirebaseContext } from './store/firebase';

ReactDOM.render(
    <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
            <React.StrictMode>
                <Login />
            </React.StrictMode>
        </FirebaseContext.Provider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
