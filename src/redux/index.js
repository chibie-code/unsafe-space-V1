// this is the Redux Store file
import { createStore } from 'redux';
import {
    reducer,
    showUsers
} from './settings_';

// const reducers = combineReducers({
//     reducer
// });

// this is the store (NB: the reducers always return the store)
export default createStore(reducer);

export {
    showUsers
};