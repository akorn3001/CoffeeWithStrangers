import React from 'react';

class Hosting extends React.Component {

  render () {
    return (
      <div>
        <div className="hosting-banner">
          <img src={window.staticImages.hostingBanner}/>
          <span>Become a CWS Host</span>
        </div>
      </div>
    );
  }
}

export default Hosting;
