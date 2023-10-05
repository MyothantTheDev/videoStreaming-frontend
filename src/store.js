import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './reducers/userReducers';

const reducer = combineReducers({
    auth: authReducer,
})

let initState = {}

const middleware = [thunk]
const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;