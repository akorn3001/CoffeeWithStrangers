import React from 'react';
import { Link } from 'react-router-dom';
import ActiveCities from './active_cities';

class Cities extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const DUMMY_CITIES = [
      {id: 1, name: 'SAN FRANCISCO', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/001/small/sf.jpg?1409550565'},
      {id: 2, name: 'NEW YORK CITY', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/005/small/nyc2-correct.jpg?1409550576'},
      {id: 3, name: 'BOSTON', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/006/small/boston.jpg?1409550578'},
      {id: 4, name: 'LONDON', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/021/small/image.jpg?1413022522'},
      {id: 5, name: 'DC', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/007/small/dc.jpg?1409550580'},
      {id: 6, name: 'CHICAGO', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/010/small/chicago.jpg?1409550585'},
    ]

    const cityLis = DUMMY_CITIES.map(city => {
      return (
        <div className="active-city" key={city.id}>
          <img className="city-photo "src={city.url} />
          <span className="city-name">{<Link className="city-link" to={`/cities/${city.id}`}>{city.name}</Link>}</span>
        </div>
      );
    })


    return (
      <div>
        <span>Welcome {this.props.currentUser.username}</span>
        <div id="set-city-container">
          <h1 id="set-city-header">Set your home city</h1>
          <p id="set-city-p">I pity the fool who doesn't set their home city! Choose a city to know about future meetups by you!</p>
        </div>

        <div id="active-cities">
          {cityLis}
        </div>
      </div>
    )
  }
}

export default Cities;
