import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { certificate, contract, getLink } from './CheckReducer';


const rootReducer = combineReducers({
  contract, certificate, getLink,

});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));