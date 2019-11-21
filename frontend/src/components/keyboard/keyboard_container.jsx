import { connect } from 'react-redux';
import Keyboard from './keyboard';

const mapStateToProps = state => ({
  // FIXME replace with real current user
  user: {id: 1, username: 'demo'}
});

const mapDispatchToProps = dispatch => ({
  // FIXME saveSnippet: (userId, snippet) => dispatch(saveSnippet(userId, snippet))
});


export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);