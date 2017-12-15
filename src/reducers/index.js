// Wherever you build your reducers
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import AppNavigation from '../AppNavigation';
//import ReduxNavigation from '../ReduxNavigation';
import AuthReducer from './AuthReducer';

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}

// export default () => {
//   /* ------------- Assemble The Reducers ------------- */
//   const rootReducer = combineReducers({
//     nav: navReducer
//     //auth: AuthReducer
//   });
//
//   // return store
//   return createStore(rootReducer)
// }

export default combineReducers({
  nav: navReducer,
  auth: AuthReducer
});
