import * as ActionType from '../actions'

const fetchReposReducer = (state = {}, action) => {
 switch (action.type) {
    case ActionType.FETCH_GITREPOS_FULFILLED:
      return {
        ...state,
        repos: action.payload  
      };

    default:
      return state;
  }
}

export default fetchReposReducer