import { connect } from 'react-redux';
import ImageUploadForm from './image_upload_form';
import { upload, save } from '../../actions/image_actions';


const mapStateToProps = (state) => {
  return {
    // snippets: Object.values(state.entities.snippets),
    userId: state.session.user.id,
    images: state.entities.images
  }
}

const mapDispatchToProps = dispatch => {
  return {
    upload: (imageFormData) => upload(imageFormData),
    save: (imageData) => dispatch(save(imageData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUploadForm)