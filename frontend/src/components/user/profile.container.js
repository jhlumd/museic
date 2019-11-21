import { connect } from 'react-redux';
import { fetchSnippetComments, composeComment, removeComment, editComment } from '../../actions/comment_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  // debugger
  if(state.entities.comments){
    // debugger
    return {
      comments: Object.values(state.entities.comments),
      userId: state.session.user.id,
      errors: state.errors.session,
    };
  } else {
    return {
      userId: state.session.user.id,
      errors: state.errors.session
    }
    
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSnippetComments: userId => dispatch(fetchSnippetComments(userId)),
    composeComment: comment => dispatch(composeComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    editComment: commentId => dispatch(editComment(commentId)),

  }
  //this is only for testing, as there are no snippets yet
}

export default connect( mapStateToProps, mapDispatchToProps )(Profile)