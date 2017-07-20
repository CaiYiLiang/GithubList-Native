import { connect } from 'react-redux';
import RepoList from '../components/RepoList';
import {fetchGitRepos} from '../actions';

const mapStateToProps = (state) => {
  return {
    repos: state.fetchRepos.repos,
    filter:state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => ({
  fetchGitRepos: (userName) => {
    dispatch(fetchGitRepos(userName))
  }
})


let Repos = connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList)

export default Repos