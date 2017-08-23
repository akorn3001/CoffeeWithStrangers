import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user)
    .then(() => {
      this.setState({email: "", password: ""});
    });
  }

  handleChange(attribute) {
    return (event) => {
      event.preventDefault();
      this.setState({[attribute]: event.currentTarget.value});
    };
  }

  render() {

    return (
      <div className="auth-form-div">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <h2 className="auth-form-header">Hey stranger!</h2>

          <p className="auth-form-p">It's good to have you back. Sign in here and sign up for your next meetup!</p>

          <input
            className="auth-input-field"
            onChange={this.handleChange('email')}
            type="text"
            value={this.state.email}
            placeholder="Email Address" />

          <br/>

          <input
            className="auth-input-field"
            onChange={this.handleChange('password')}
            type="password"
            value={this.state.password }
            placeholder="Password"
          />

          <br/>

          <input className="auth-form-submit" type="submit" value="SIGN IN" />

          <div className="redirect-below-submit-button">
            <Link className="login-signup-redirect-link" to="/signup">If you've never signed up before, click here and do that</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
