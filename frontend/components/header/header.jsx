import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    return (event) => {
      event.preventDefault();
      this.props.logout()
      .then(() => this.props.history.push('/login'));
    };


  }

  render() {
    let navigation;

    // BASIC NAVIGATION LINKS
    const citiesLink = <Link to="/cities">CITIES</Link>;
    const hostingLink = <Link to="/hosting">HOSTING</Link>;
    const dashboardLink = <Link to="/profile">DASHBOARD</Link>;
    const signoutLink = <Link onClick={this.handleLogout()} to="/login">SIGN OUT</Link>;
    const aboutLink = <Link to="/about">ABOUT</Link>;
    const signinLink = <Link to="/login">SIGN IN</Link>;

  // FAKE BUTTON LINKS
    const setCityLink = <Link to="/cities" className="fake-button">SET HOME CITY</Link>;
    const signupLink = <Link to="/signup" className="fake-button">SIGN UP</Link>;


    if (this.props.currentUser) {
      if (this.props.currentUser.city_id) {
        navigation =
        <ul className="nav-links">
          <li className="nav-link-item"><Link to={`/cities/${this.props.currentUser.city_id}`}>HOME CITY</Link></li>
          <li className="nav-link-item">{citiesLink}</li>
          <li className="nav-link-item">{hostingLink}</li>
          <li className="nav-link-item">{dashboardLink}</li>
          <li className="nav-link-item">{signoutLink}</li>
        </ul>; } else {
        navigation =
          <ul className="nav-links ">
            <li className="nav-link-item">{setCityLink}</li>
            <li className="nav-link-item">{hostingLink}</li>
            <li className="nav-link-item">{dashboardLink}</li>
            <li className="nav-link-item">{signoutLink}</li>
          </ul>;
        }
      } else {
          navigation =
          <ul className="nav-links">
            <li className="nav-link-item">{citiesLink}</li>
            <li className="nav-link-item">{hostingLink}</li>
            <li className="nav-link-item">{aboutLink}</li>
            <li className="nav-link-item">{signinLink}</li>
            <li className="nav-link-item">{signupLink}</li>
          </ul>;
        }

    return (
      <header>
        <div id="logo-and-name">
          <img id="navbar-logo-image" src={window.staticImages.coffeeBeans}/>
          <span id="navbar-logo-text">Coffee With Strangers</span>
        </div>
        {navigation}
      </header>
    );
  }
}

export default Header;
