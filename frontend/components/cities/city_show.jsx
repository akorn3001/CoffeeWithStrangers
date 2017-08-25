import React from 'react';
import DUMMY_CITIES from '../dummy_cities'

class CityShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let thisCity;
    let cityId = parseInt(this.props.match.params.cityId)
    let homeCityMessage;

    function extractCity (city_id) {
      for (let i = 0; i < DUMMY_CITIES.length; i++) {
        if (DUMMY_CITIES[i].id === city_id) {
          return thisCity = DUMMY_CITIES[i]
        }
      }

      return "whoops";
    }

    let cityName = extractCity(cityId).name

    if (this.props.currentUser) {
      if (this.props.currentUser.city_id === cityId) {
        homeCityMessage = <span>{cityName} is your home city, {this.props.currentUser.username}</span>
      } else {
        homeCityMessage = null;
      }
    }

    debugger
    return (
      <div>
        <div className="city-show-banner">
          <img className="city-show-photo" src={extractCity(cityId).url} />
          <span>{cityName}</span>
        </div>

        {homeCityMessage}
      </div>
    )
  }
}

export default CityShow;
