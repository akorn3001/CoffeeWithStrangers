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

        <div className="below-splash-banner">
          <img src={window.staticImages.coffeeFaces}/>
          <blockquote>
            "A leaf fluttered in through the window this morning, as if supported
            by the rays of the sun, a bird settled on the fire escape, joy in the
            task of coffee, joy accompanied me as I walked" ~ Anais Nin
          </blockquote>
        </div>
      </div>
    );
  }
}

export default SplashPage;
