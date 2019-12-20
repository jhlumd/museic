import { connect } from 'react-redux';
import { fetchAllSnippets } from '../../actions/snippet_actions'
import {
  fetchComments,
  composeComment,
  removeComment,
  editComment
} from "../../actions/comment_actions";
import { addLike, unlike, fetchLikes } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';
import { upload, save, fetchImages } from '../../actions/image_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchFans, addFan, removeFan } from '../../actions/fan_actions';

import UserShow from './user_show';

const mapStateToProps = (
  { entities: { snippets, likes, fans, users, comments, images }, session },
  { match }
) => {
  let isFan = false;
  let fanId = "";
  // debugger
  Object.values(fans).forEach(fan => {
    if (fan.idol === match.params.id && fan.fan === session.user.id) {
      // debugger
      isFan = true;
      fanId = fan._id;
    }
  });
  return {
    snippets: Object.values(snippets),
    snippetLikes: Object.values(likes),
    currentUser: session.user,
    images,
    users,
    comments,
    likes,
    isFan,
    fanId,
    fans: Object.values(fans),
    userId: match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllSnippets: () => dispatch(fetchAllSnippets()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchImages: () => dispatch(fetchImages()),
    fetchFans: () => dispatch(fetchFans()),
    fetchComments: () => dispatch(fetchComments()),
    //fan actions
    addFan: (fanData) => dispatch(addFan(fanData)),
    removeFan: (fanId) => dispatch(removeFan(fanId)),
    //image actions
    upload: (imageFormData) => upload(imageFormData),
    save: (imageData) => dispatch(save(imageData)),
    openModal: (modal) => dispatch(openModal(modal)),

    //CRUD operations for Comments and Likes
    composeComment: comment => dispatch(composeComment(comment)),
    removeComment: commentId => dispatch(removeComment(commentId)),
    editComment: commentId => dispatch(editComment(commentId)),
    addLike: likeData => dispatch(addLike(likeData)),
    unLike: likeId => dispatch(unlike(likeId))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(UserShow);
