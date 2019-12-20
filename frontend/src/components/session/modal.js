import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import UploadFormContainer from '../image_upload/image_upload_form_container';
import ShareSnippetContainer from '../share_modal/snippet_share_container';


class Modal extends React.Component {

  render (){
    if(!this.props.modal) {
      return null;
    } else if(this.props.modal === 'login'){
      return (
        <div className="modal-background" onClick={this.props.closeModal}>
          <div className="modal-login" onClick={e => e.stopPropagation()}>
            <LoginFormContainer />
          </div>
        </div> 
      );
    } else if (this.props.modal === 'signup') {
      return (
        <div className="modal-background" onClick={this.props.closeModal}>
          <div className="modal-signup" onClick={e => e.stopPropagation()}>
            <SignupFormContainer />
          </div>
      </div> 
      );
    } else if (this.props.modal === 'upload') {
      return (
        <div className="modal-background" onClick={this.props.closeModal}>
          <div className="modal-upload" onClick={e => e.stopPropagation()}>
            <UploadFormContainer />
          </div>
        </div> 
      );
    } else if (this.props.modal === 'delete') {
      // delete snippet
    } else if (this.props.modal != null ) {
      return(
        <div className="modal-background" onClick={this.props.closeModal}>
          <div className="modal-share" onClick={e => e.stopPropagation()}>
            <ShareSnippetContainer link={this.props.modal}/>
          </div>
        </div> 
      );
    }
  }
  
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);