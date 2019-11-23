// import React from 'react';
// import CommentListItem from './comment_list_item'

// class Profile extends React.Component {
//   //all transfer to comment create page
//   constructor(props) {
//     super(props)
//     this.state = {
//       userId: this.props.userId,
//       body: ''
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   componentDidMount(){
//     // debugger
//     this.props.fetchSnippetComments(this.props.userId)
//   }

//   handleSubmit(e){
//     e.preventDefault();
//     // debugger
//     this.props.composeComment(this.state)
//       .then(() => this.props.fetchSnippetComments(this.props.userId) )
//     this.setState({body: ''})
//   }

//   handleChange(field) {
//     return e => this.setState({[field]: e.currentTarget.value});
//   }

//   render() {
//     if(!this.props.comments) return null
//     console.log(this.props.comments)
//     //transfer map function to snippet comments show page
//     // debugger
//     return(
//       <div>
//         {
//           this.props.comments.map( comment => (
//             <CommentListItem 
//               key={comment._id} 
//               id={comment._id} 
//               deleteComment={this.props.removeComment}
//               body={comment.body}
//               editComment={this.props.editComment}
//               // userId={this.props.userId}
//             />
//           ))
//         }
//           <h3>Comment form</h3>
//           <form onSubmit={this.handleSubmit}>
//             <label>Comment Body:
//               <input type="text"
//                 value={this.state.body}
//                 onChange={this.handleChange('body')}
//                 placeholder="----Body text"
//               />
//             </label>
//             <input type="submit" value="create new comment"/>
//           </form>
        
//       </div>
//     )
//   }

// }

// export default Profile;