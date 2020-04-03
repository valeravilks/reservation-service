import {combineReducers} from 'redux';
import login from './login/reducer';
import { connectRouter } from 'connected-react-router';
import { History } from "history";

const RootReducer = (history: History) => combineReducers({
   login,
   router: connectRouter(history)
});

export default RootReducer;