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
    let link = (
      <header>
        <Link to='/login'>Log In</Link>
      </header>
    );

    return (
      <div>
        {link}
        <form onSubmit={this.handleSubmit}>
          <h2>Join for coffee</h2>

          <p>Thousands of strangers across the world have sat together for conversations. We can't wait for you to join them.</p>
            <input
              onChange={this.handleChange('username')}
              type="text"
              value={this.state.username}
              placeholder="First name (or nickname)"
            />

          <br/>

          <input
            onChange={this.handleChange('email')}
            type="text"
            value={this.state.email}
            placeholder="Email Address"
          />

          <br/>

          <input
            onChange={this.handleChange('password')}
            type="password"
            value={this.state.password }
            placeholder="Password"
          />

          <br/>

          <input type="submit" value="LET'S GET COFFEE" />
        </form>
      </div>
    );
  }
}


export default SignupForm;
