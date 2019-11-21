import { connect } from 'react-redux';
import SnippetDisplay from './snippet_display';

const mapStateToProps = state => ({
//  user: state.entities.users[0]
user: { id: 1, username: 'demo'}
});

const mapDispatchToProps = dispatch => ({
  // addLike: (userId, snippetId) => dispatch(addLike(userId, snippetId))
});


export default connect(mapStateToProps, mapDispatchToProps)(SnippetDisplay);