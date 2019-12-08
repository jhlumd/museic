import { connect } from 'react-redux';
import { fetchSnippets } from '../../actions/snippet_actions'
import { fetchLikes } from '../../actions/like_actions';
import { fetchUsers } from '../../actions/user_actions';
import { upload, save, fetchImages } from '../../actions/image_actions';
import { openModal } from '../../actions/modal_actions';

import UserShow from './user_show';

const mapStateToProps = ({ entities: { snippets, likes, users, images }, session }, { match }) => {
  return {
    snippets: Object.values(snippets),
    snippetLikes: Object.values(likes),
    currentUser: session.user,
    images,
    users,
    userId: match.params.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSnippets: () => dispatch(fetchSnippets()),
    fetchLikes: () => dispatch(fetchLikes()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchImages: () => dispatch(fetchImages()),
    upload: (imageFormData) => upload(imageFormData),
    save: (imageData) => dispatch(save(imageData)),
    openModal: (modal) => dispatch(openModal(modal)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(UserShow)