import React from 'react';
import DUMMY_CITIES from '../dummy_cities'

class CityShow extends React.Component {
  constructor(props) {

    super(props)
  }

  render() {
    debugger
    let message;
    if (this.props.currentUser) {
       message = (
        <div>
          <h1>This is your city, {`${this.props.currentUser.username}`}</h1>
        </div>
      );
    } else {
      message = (
        <div>
          <h1>Welcome</h1>
        </div>
      );
    }

    return message;
  }
}

export default CityShow;
