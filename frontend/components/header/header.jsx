import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render() {
    let navigation;

    if (this.props.currentUser) {
      if (this.props.city) {
        navigation =
        <ul className="nav-links">
          <li>**City Will Go Here**</li>
          <li>CITIES</li>
          <li>HOSTING</li>
          <li>DASHBOARD</li>
          <li>SIGN OUT</li>
        </ul>
      } else {
        navigation =
        <ul className="nav-links">
          <li><button>SET HOME CITY</button></li>
          <li>HOSTING</li>
          <li>DASHBOARD</li>
          <li>SIGN OUT</li>
        </ul>
      }
    } else {
      navigation =
      <ul className="nav-links">
        <li>CITIES</li>
        <li>HOSTING</li>
        <li>ABOUT</li>
        <li>SIGN IN</li>
        <li><button>SIGN UP</button></li>
      </ul>
    }

    return (
      <header>
        <span>Coffee With Strangers</span>
        {navigation}
      </header>
    );
  }
}

export default Header;
