import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'


class Modal extends React.Component {
  // constructor(props){
  //   super(props)
  //   // this.slowExit = this.slowExit.bind(this)
  // }

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
    } else {
      return (
        <div className="modal-background" onClick={this.props.closeModal}>
          <div className="modal-signup" onClick={e => e.stopPropagation()}>
            <SignupFormContainer />
          </div>
      </div> 
      );
    }
  }
  
  // slowExit () {
  //   $('.modal-background').fadeOut(256, 
  //     () => this.props.closeModal() 
  //   )
  // }
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