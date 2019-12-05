import React from 'react';

class ImageUploadForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
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
      // .then(() => ) save to database with userId and imageUrl 
  }

  handleFile(e) {
    const file = e.target.files[0] //gets the file
    console.log(file)
    const formData = new FormData() //new form data obj
    formData.append('image', file) //adds the file to FormData obj, and sets it under key of 'image'
    
    this.setState({imageFormData: formData}) //saves FormData obj in local state
  }

  render(){
    return(
      <form onSubmit={() => this.handleSubmit()}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <label className="fileContainer">
          Choose a file
            <input 
              className="inputfile" 
              type="file"
              onChange={e => this.handleFile(e)}
            />
        </label>
        <input type="submit" value='--Upload Image--'/>
      </form>
    )
  }
}

export default ImageUploadForm