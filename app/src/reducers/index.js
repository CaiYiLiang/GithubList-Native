import { combineReducers } from 'redux';
import fetchUserReducer from './fetchUserReducer';
import fetchReposReducer from './fetchReposReducer';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
   fetchUser: fetchUserReducer,
   fetchRepos:fetchReposReducer,
   visibilityFilter
})

export default rootReducer