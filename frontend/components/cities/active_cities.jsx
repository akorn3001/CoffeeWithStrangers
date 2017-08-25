import React from 'react';
import { Link } from 'react-router-dom';

class ActiveCities extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    const DUMMY_CITIES = [
      {id: 1, name: 'Seattle'},
      {id: 2, name: 'Rome'},
      {id: 3, name: 'Portland'},
      {id: 4, name: 'New York'},
      {id: 5, name: 'Melbourne'},
      {id: 6, name: 'London'},
    ]

    const cityLis = DUMMY_CITIES.map(city => <li key={city.id}>{city.name}</li>)

    return (
      <ul>
        {cityLis}
      </ul>
    )
  }
}

export default ActiveCities;
