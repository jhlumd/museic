import { connect } from 'react-redux';
import { upload, save } from '../../actions/image_actions';
import { closeModal } from '../../actions/modal_actions';

import ImageUploadForm from './image_upload_form';

const mapStateToProps = (state) => {
  return {
    userId: state.session.user.id,
    images: state.entities.images
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    upload: (imageFormData) => upload(imageFormData),
    save: imageData => dispatch(save(imageData)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUploadForm);