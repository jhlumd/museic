import React from 'react';

class IndexCard extends React.Component {

  render(){
    const {snippetId, snippet: {title, description, user, notes, date }} = this.props
    return (
      <div 
        className='IndexCard' 
        onClick={e => {
          // debugger
          this.props.handleClick(e)
        }} 
        snippetid={snippetId}
      >
        <p>----------------------</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{user}</p>
        {/* <p>{public}</p> */}
        {/* <p>{notes}</p> */}
        <p>{date}</p>
        <p>---------------------</p>
      </div>
    )
  }

}

export default IndexCard;