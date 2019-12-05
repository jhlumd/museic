import { connect } from 'react-redux';
import { fetchSnippets } from '../../actions/snippet_actions'
import { fetchLikes } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';

import UserShow from './user_show';

const mapStateToProps = (state) => {
  return {
    snippets: Object.values(state.entities.snippets),
    snippetLikes: Object.values(state.entities.likes),
    user: state.session.user,
    userId: state.session.user.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSnippets: () => dispatch(fetchSnippets()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(UserShow)