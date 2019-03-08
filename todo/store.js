import { createStore, combineReducers } from 'redux';
import textReducer from './reducers/textReducer';
// import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    text: textReducer,
    // auth: authReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;