import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  handleClick() {
    return (event) => {
      event.preventDefault();
      this.props.login({email: 'guest-user', password: 'guest-user'});
    };
  };


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

            <button className="auth-form-submit" type="submit">SIGN IN</button>

            <div className="redirect-below-submit-button">
              <Link className="login-signup-redirect-link" to="/signup">If you've never signed up before, click here and do that</Link>
            </div>

            <div className="guest-login-div">
              <button onClick={this.handleClick()} className="guest-login-button">Click here to log-in as Guest</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
// onClick={this.handleClick()}
export default LoginForm;
