import React from 'react';
import { Link } from 'react-router-dom';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user)
    .then(() => {
      this.setState({ username: "", email: "", password: "" });
    });
  }

  handleChange(attribute) {
    return (event) => {
      event.preventDefault();
      this.setState({[attribute]: event.currentTarget.value});
    };
  }

  render() {
    let errorBanner;
    if (this.props.errors.length) {
      errorBanner = <div className="error-banner"><p>{this.props.errors}</p></div>
    } else {
      errorBanner = null;
    }

    return (
      <div>
        {errorBanner}
        <div className="auth-form-div">
          <form className="auth-form" onSubmit={this.handleSubmit}>
            <h2 className="auth-form-header">Join for coffee</h2>

            <p className="auth-form-p">Thousands of strangers across the world have sat together for conversations. We can't wait for you to join them.</p>
              <input
                className="auth-input-field"
                onChange={this.handleChange('username')}
                type="text"
                value={this.state.username}
                placeholder="First name (or nickname)"
              />

            <br/>

            <input
              className="auth-input-field"
              onChange={this.handleChange('email')}
              type="text"
              value={this.state.email}
              placeholder="Email Address"
            />

            <br/>

            <input
              className="auth-input-field"
              onChange={this.handleChange('password')}
              type="password"
              value={this.state.password }
              placeholder="Password (at least 8 characters!)"
            />

            <br/>

            <button className="auth-form-submit" type="submit">LET'S GET COFFEE</button>

            <div className="redirect-below-submit-button">
              <Link className="login-signup-redirect-link" to="/login">If you've already done this before, click here to log in</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


export default SignupForm;
