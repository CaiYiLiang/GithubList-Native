// Action Creaters
// Create action for GithubUser-fecth
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

// Create action for GithubList-fecth
export const FETCH_GITREPOS = 'FETCH_GITREPOS';
export const FETCH_GITREPOS_FULFILLED = 'FETCH_GITREPOS_FULFILLED';

export const fetchGitRepos = username => ({ type: FETCH_GITREPOS, payload: `${username}/repos` });
export const fetchGitReposFulfilled = payload => ({ type: FETCH_GITREPOS_FULFILLED, payload });

// Create action for GithubList-Filter
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})