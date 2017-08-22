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
    let link = (
      <header>
        <Link to='/signup'>Sign Up</Link>
      </header>
    );

    return (
      <div>
        {link}
        <form onSubmit={this.handleSubmit}>
          <h2>Hey there, stranger!</h2>

          <p>It's good to have you back. Sign in here and sign up for your next meetup!</p>

          <input
            onChange={this.handleChange('email')}
            type="text"
            value={this.state.email}
            placeholder="Email Address" />

          <br/>

          <input
            onChange={this.handleChange('password')}
            type="password"
            value={this.state.password }
            placeholder="Password"
          />

          <br/>

          <input type="submit" value="SIGN IN" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
