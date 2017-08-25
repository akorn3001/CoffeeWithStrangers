import React from 'react';
import { Link } from 'react-router-dom'
import DUMMY_CITIES from '../dummy_cities'

class CityShow extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    return (event) => {
      event.preventDefault();
      this.props.changeCity();
    };
  };

  render() {
    let thisCity;
    let cityId = parseInt(this.props.match.params.cityId)
    let cityMessage;

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
      if (this.props.currentUser.city_id){
        if (this.props.currentUser.city_id === cityId) {
          cityMessage =
          <div>
            <span>
              <strong>{cityName} is your home city!</strong> If you've moved, <Link to="/cities">change your home city here.</Link>
            </span>
          </div>

        } else {
          cityMessage =
          <div>
            <span><strong>Do you live in {cityName} now?</strong></span>
            <button onClick={this.handleClick()} className="change-city-button">yup!</button>
          </div>;
        }
      } else {
        cityMessage =
        <div>
          <span><strong>You have no home city yet!</strong></span>
          <button onClick={this.handleClick()} className="change-city-button">
            Set {cityName} as my home city
          </button>
        </div>;
      }
    }

    return (
      <div>
        <div className="city-show-banner">
          <img className="city-show-photo" src={extractCity(cityId).url} />
          <span>{cityName}</span>
        </div>

        {cityMessage}

        <div>
          <h2>The host community is great!</h2>
          <p>How else would someone end up regularly
            bringing strangers together for conversations?
            Before each of them were invited to community,
            they were attendees that fed their tea times with
            their questions, open-mindedness, and presence.
          </p>
        </div>
      </div>
    )
  }
}

export default CityShow;
