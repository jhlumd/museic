import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Profiles page
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.currentUser === true) {
  //     this.props.history.push('/snippets/index');
  //   }

  //   // Set or clear errors
  //   this.setState({ errors: nextProps.errors });
  // }

  // Handle field updates (called in the render method)
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(user)
      .then( res => {
        if(res === 'failed'){
          this.setState({ errors: this.props.errors })
        } else {
          const placeholder = () => new Promise(
            res => setTimeout(()=> res(), 10)
          )
          placeholder()
            .then(() => this.props.closeModal())
            .then(() => this.props.history.push('/snippets/index'));
        }
      })
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin() {
    const demoUser = {
      email: 'demo@demo.com',
      password: 'demo123'
    }
    this.props.login(demoUser)
      .then(() => this.props.closeModal())
      .then(() => this.props.history.push('/snippets/index'));
  }

  render() {
    return (
      <div id='login-form-container' onClick={(e) => {
        e.stopPropagation();
        // this.props.closeModal();
        }}>
        <form onSubmit={this.handleSubmit} onClick={(e) => e.stopPropagation()}>
          <div>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email"
            />
            <br />
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder="Password"
            />
            <br />
            <button type="submit">Sign In</button>
          <ul className='session-errors'>
            {this.renderErrors()}
          </ul>
          </div>
        </form>
          <button id='demo-login-button' onClick={this.demoLogin.bind(this)}>Demo Login</button>
      </div>
    );
  }
}

export default withRouter(LoginForm);