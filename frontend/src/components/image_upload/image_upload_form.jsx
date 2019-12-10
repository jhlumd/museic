import React from 'react';
import { withRouter } from 'react-router-dom';

class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uploading: false, //add loading icon later
      userId: '',
      imageUrl: '',
      imageFormData: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFile = this.handleFile.bind(this)
  }

  handleSubmit() {
    console.log('sent')
    this.props.upload(this.state.imageFormData) //uploads the file to mongoDB
      .then((res) => {
        console.log(res)
        const newProfileImage = {
          userId: this.props.userId,
          imageUrl: res.imageUrl,
        }
        this.props.save(newProfileImage)
      }) //save to database with userId and imageUrl 
      .then(() => this.props.closeModal())
  }

  handleFile(e) {
    const file = e.target.files[0] //gets the file
    console.log(file)
    const formData = new FormData() //new form data obj
    formData.append('image', file) //adds the file to FormData obj, and sets it under key of 'image'

    this.setState({ imageFormData: formData }) //saves FormData obj in local state
  }

  render() {
    return (
      <div id='upload-form-container' onClick = {(e) => {
        this.props.closeModal();}}>
        
        <form onSubmit={() => this.handleSubmit()} onClick={(e) => e.stopPropagation()}>
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