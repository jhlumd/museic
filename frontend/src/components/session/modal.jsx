import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { deleteSnippet } from "../../actions/snippet_actions";
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
    } else if (this.props.modal.delete) {
      // debugger;
      return (
        <div className="modal-background" onClick={this.props.closeModal}>
          <div className="modal-share" onClick={e => e.stopPropagation()}>
            <div id="share-link-container">
              <div className="link-container">
                <p className="link-text">
                  Are you sure you want to delete this snippet?
                </p>
                <button
                  onClick={() => {
                    this.props.deleteSnippet(this.props.modal.delete);
                    this.props.closeModal();
                  }}
                >
                  Delete
                </button>
                <button onClick={this.props.closeModal}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      );
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
  // debugger;
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    deleteSnippet: snippetId => dispatch(deleteSnippet(snippetId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);