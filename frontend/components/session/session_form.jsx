
import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => {
      this.setState({username: "", password: ""});
    });
  }

  handleChange(attribute) {
      return (event) => {
        event.preventDefault();
        this.setState({[attribute]: event.currentTarget.value});
      };
  }

  render() {
    let link;
    if (this.props.formType === 'login') {
      link = (
        <header>
          <Link to='/signup'>Sign Up</Link>
        </header>
      );
    } else if (this.props.formType === 'signup') {
      link = (
        <header>
          <Link to='/login'>Log In</Link>
        </header>
      );
    }
    return (
      <div>
        {link}
        <form onSubmit={this.handleSubmit}>
          <label>USERNAME
            <input onChange={this.handleChange('username')} type="text" value={this.state.username} />
          </label>

          <br/>

        <label>PASSWORD
          <input onChange={this.handleChange('password')} type="password" value={this.state.password }/>
        </label>

          <br/>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
