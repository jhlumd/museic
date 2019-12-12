import React from 'react';
import { withRouter } from 'react-router-dom';

class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    navigator.clipboard.writeText(this.props.link);
    this.setState({copied: true})
    setTimeout(() => this.setState({copied: false}), 2000)
  }

  renderCopyButton(){
    if(this.state.copied){
      return <button id="was-copied">Copied!</button>
    } else {
      return <button id="not-yet-copied" onClick={() => this.handleClick()}>Copy</button>
    }
  }

  render() {
    return (
      <div id='share-link-container' onClick={(e) => {
        this.props.closeModal();
      }}>
        <div id="link-container" onClick={(e)=> e.stopPropagation()}>
          <p id="link-text">{this.props.link}</p>
          {this.renderCopyButton()}
        </div>


      </div>
    )
  }
}

export default withRouter(ImageUploadForm);