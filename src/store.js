import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const appReducer = () => ({
  projectName: 'React-Redux',
});

const store = createStore(appReducer);
export default store;
