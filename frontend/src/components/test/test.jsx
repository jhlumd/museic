import React from 'react';

class Test extends React.Component {
  componentDidMount(){
    this.props.fetchFans()
  }

  render() {
    return(
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <p>Hello</p>
      </div>
    )
  }
}

export default Test;