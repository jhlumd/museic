import { connect } from 'react-redux';
import { fetchSnippets } from '../../actions/snippet_actions'

import UserShow from './user_show';

const mapStateToProps = (state) => {
  return {
    snippets: Object.values(state.entities.snippets),
    userId: state.session.user.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSnippets: () => dispatch(fetchSnippets()),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(UserShow)