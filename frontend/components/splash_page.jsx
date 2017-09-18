import React from 'react';

class SplashPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render () {
    return (
      <div>
        <div className="splash-banner">
          <img src={window.staticImages.aboutBanner}/>
          <span>Coffee and Conversation Awaits You</span>
        </div>
      </div>
    );
  }
}

export default SplashPage;
