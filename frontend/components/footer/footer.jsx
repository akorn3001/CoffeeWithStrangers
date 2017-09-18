import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    // BASIC NAVIGATION LINKS
    const aboutLink = <Link to="/about">ABOUT</Link>;
    const hostingLink = <Link to="/hosting">HOSTING</Link>;
    const citiesLink = <Link to="/cities">CITIES</Link>;

    let navigation =
    <ul id="footer-links">
      <li className="footer-link-item">{aboutLink}</li>
      <li className="footer-link-item">{hostingLink}</li>
      <li className="footer-link-item">{citiesLink}</li>
      <li className="footer-link-item"><a href="alex-kornfeld.com">PORTFOLIO</a></li>
      <li className="footer-link-item"><a href="https://github.com/akorn3001"><i className="devicon-github-plain"></i> GITHUB</a></li>
    </ul>;

    return (
      <footer>
        <div id="footer-components">
          {navigation}
          <div id="footer-paragraphs">
            <p>
              Coffee With Strangers is all about making
              our cities feel more like neighborhoods.
              We're more "connected" than ever before,
              but we're also more alone. And all we want
              to do is bring people together because, well,
              the world is better that way.
            </p>

            <p>
              We're not doing anything groundbreaking. We're
              creating something that would've been incredibly
              unnecessary 20 years ago. But while we get busier,
              it's easy to forget the value of a conversation for
              no reason. A conversation that's intentionally
              unintentional.
            </p>
          </div>


        </div>
        <div id="footer-alex">
          <span>© Alex Kornfeld 2017</span>
        </div>

      </footer>
    );
  }
}

export default Footer;
