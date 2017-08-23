import React from 'react';
import { Redirect, Link } from 'react-router-dom';

class Greeting extends React.Component {

  handleClick() {
    debugger
    return (event) => {
      event.preventDefault();
      this.props.history.push('/login')
      this.props.logout();
    }
  }

  render() {
    let element;
    if (this.props.currentUser) {
       element = (
        <div>
          <h1>{`Welcome, ${this.props.currentUser.username}`}</h1>
          <button onClick={this.handleClick()}>Log Out</button>
        </div>
      );
    } else {
      element = (
        <div>
          <Link to="/signup" >--Sign-Up--</Link>
          <br/>
          <Link to="/login" >--Login--</Link>
        </div>
      );
    }

    return element;
  }
}

export default Greeting;
