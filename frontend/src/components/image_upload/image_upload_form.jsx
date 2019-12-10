import React from 'react';
import { withRouter } from 'react-router-dom';

class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploading: false,
      userId: '',
      imageUrl: '',
      imageFormData: null,
      errors: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleSubmit() {
    // console.log('sent')
    if(!this.state.imageFormData){
      this.setState({errors: 'Please select an image'})
      return null
    }
    this.setState({uploading: true})
    this.props.upload(this.state.imageFormData) //uploads the file to mongoDB
      .then((res) => {
        console.log(res)
        const newProfileImage = {
          userId: this.props.userId,
          imageUrl: res.imageUrl,
        }
        this.props.save(newProfileImage)
      }) //save to database with userId and imageUrl 
      .then(() => {
        this.setState({ uploading: false })
        this.props.closeModal()
      })
  }

  handleFile(e) {
    const file = e.target.files[0] //gets the file
    // console.log(file)
    const formData = new FormData() //new form data obj
    formData.append('image', file) //adds the file to FormData obj, and sets it under key of 'image'

    this.setState({ imageFormData: formData }) //saves FormData obj in local state
  }

  loadingIcon() {
    if(this.state.uploading){
      return (
        <div>
          <i>Loading...</i>
        </div>
      )
    }
  }

  render() {
    return (
      <div id='upload-form-container' onClick = {(e) => {
        this.props.closeModal();}}>
        <form onSubmit={() => this.handleSubmit()} onClick={(e) => e.stopPropagation()}>
          <p className="error">{this.state.errors}</p>
        {this.loadingIcon()}
          <label className="fileContainer">
            Choose a file:
              <input
              className="inputfile"
              type="file"
              onChange={e => this.handleFile(e)}
            />
          </label>
          <button type="submit">Submit Image</button>
        </form>
      </div>
    )
  }
}

export default withRouter(ImageUploadForm);