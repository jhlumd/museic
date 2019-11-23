import React from 'react';

class ShowCard extends React.Component {
  constructor(props){
    super(props)
    this.state={
      userId: this.props.userId,
    }
  }
  
  // componentDidMount(){
  //   this.props.fetchSnippetComments()
  // }

  componentDidMount(){
    this.props.fetchSnippetComments(this.props.snippet._id)
  }

  render(){
    const { snippet: { title, description, user, notes, date } } = this.props

    return (
      <div>
        <p>************************</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{user}</p>
        <p>1 comment</p>
        {
          this.props.comments.map( comment => {
            return <p key={comment._id}>{comment.body}</p>
          })
        }
      </div>
    )
  }
}

export default ShowCard;