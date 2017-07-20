import * as ActionType from '../actions'

const fetchUserReducer = (state = {}, action) => {
 switch (action.type) {
    case ActionType.FETCH_USER_FULFILLED:
      return {
        ...state,
        user: action.payload  
      };

    default:
      return state;
  }
}

export default fetchUserReducer