import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Footer from '../components/Footer';

const mapDispatchToProps = dispatch => ({
  onClick: (filter) => {
    dispatch(setVisibilityFilter(filter))
  }
})

const mapStateToProps = state => {
  return {
    user: "state.fetchUser.user"
  }
}

let FootButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FootButton