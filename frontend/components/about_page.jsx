import React from 'react';

class About extends React.Component {

  render () {

    return (
      <div>
        <div className="about-banner">
          <img src={window.staticImages.aboutBanner}/>
          <span>About Coffee With Strangers</span>
        </div>
      </div>
    )
  }
}

export default About;
