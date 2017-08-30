import React from 'react';
import { Link } from 'react-router-dom';
import DUMMY_CITIES from '../dummy_cities';


class Cities extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    const cityLis = DUMMY_CITIES.map(city => {
      return (
        <div className="active-city" key={city.id}>
          <img className="city-photo" src={city.url} />
          <span className="city-name">{
              <Link className="city-link" to={`/cities/${city.id}`}>{
                  city.name.toUpperCase()
                }</Link>
            }</span>
        </div>
      );
    });


    return (
      <div>

        <div id="set-city-container">
          <h1 id="set-city-header">Set your home city</h1>
          <p id="set-city-p">I pity the fool who doesn't set their home city! Choose a city to know about future meetups by you!</p>
        </div>

        <div id="active-cities">
          {cityLis}
        </div>
      </div>
    );
  }
}

export default Cities;
