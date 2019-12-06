import { connect } from 'react-redux';
import { fetchSnippets } from '../../actions/snippet_actions'
import { fetchLikes } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';

import UserShow from './user_show';

const mapStateToProps = ({ entities: { snippets, likes, user } }, { match }) => {
  return {
    snippets: Object.values(snippets),
    snippetLikes: Object.values(likes),
    user,
    userId: match.id,
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