import { createStore, combineReducers } from 'redux';
import authReducer from './store/auth';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;