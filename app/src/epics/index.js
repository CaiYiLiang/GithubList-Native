import { combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import * as ActionType from '../actions';

const fetchUserEpic = (action$) =>
  action$.ofType(ActionType.FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => ActionType.fetchUserFulfilled(response))
    );

const fetchReposEpic = (action$) =>
  action$.ofType(ActionType.FETCH_GITREPOS)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => ActionType.fetchGitReposFulfilled(response))
    );

const rootEpic = combineEpics( fetchUserEpic, fetchReposEpic);
export default rootEpic