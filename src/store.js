import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from './reducers/userReducers';
import { studentsReducer } from './reducers/studentReducers';

import { loadState } from './saveState';

const reducer = combineReducers({
    auth: authReducer,
    student: studentsReducer,
})

let initState = {
    auth: loadState('user') ? loadState('user'): {
        isAuthenticated: false,
        loading: false,
        user: null
    },
}

const middleware = [thunk]
const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;