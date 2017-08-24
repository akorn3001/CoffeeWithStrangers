import React from 'react';
import { Link } from 'react-router-dom';

class Cities extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <div id="set-city-container">
          <h1 id="set-city-header">Set your home city</h1>
          <p id="set-city-p">I pity the fool who doesn't set their home city! Choose a city to know about future meetups by you!</p>
        </div>
      </div>
    )
  }
}

export default Cities;
