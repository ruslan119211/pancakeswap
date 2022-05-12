import {createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const root = combineReducers({
    rootReducer
})

export const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)))

