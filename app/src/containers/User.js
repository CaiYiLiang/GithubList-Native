import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => {
  return {
    user: state.fetchUser.user
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (userName) => {
    dispatch(fetchUser(userName))
  }
})

let User = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default User