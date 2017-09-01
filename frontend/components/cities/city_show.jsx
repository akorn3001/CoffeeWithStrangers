import React from 'react';
import { Link } from 'react-router-dom';
import DUMMY_CITIES from '../dummy_cities';
import MeetupIndexContainer from '../meetups/meetup_index_container';

class CityShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.requestAllCityMeetups(this.props.match.params.cityId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.cityId !== nextProps.match.params.cityId) {
      this.props.requestAllCityMeetups(nextProps.city);
    }
  }

  handleClick(cityId) {
    return (event) => {
      event.preventDefault();
      this.props.changeUserCity(this.props.currentUser.id, cityId);
    };
  }

  render() {
    let thisCity;
    let cityId = parseInt(this.props.match.params.cityId);
    let cityMessage;

    function extractCity (city_id) {
      for (let i = 0; i < DUMMY_CITIES.length; i++) {
        if (DUMMY_CITIES[i].id === city_id) {
          return thisCity = DUMMY_CITIES[i];
        }
      }

      return "whoops";
    }

    let thisCityName = extractCity(cityId).name;
    let homeCityName;
    let homeCityId;

    if (this.props.currentUser) {
      if (this.props.currentUser.city_id) {

        homeCityName = extractCity(this.props.currentUser.city_id).name;
        homeCityId = extractCity(this.props.currentUser.city_id).id;

        if (this.props.currentUser.city_id === cityId) {

          cityMessage =
          <div className="city-message">
            <span>
              <strong>{thisCityName} is your home city!</strong> If you've moved, <Link to="/cities" className="city-show-link">change your home city here.</Link>
            </span>
          </div>;

        } else {
          cityMessage =
          <div className="city-message">
            <span>
              <strong>Do you live in {thisCityName} now?</strong>
            </span>

            <button onClick={this.handleClick(cityId)} className="city-page-button">yup!</button>

            <span><Link className="city-show-link"to={`/cities/${homeCityId}`}>{homeCityName}</Link> is your home city right now. The big button will change that!</span>
          </div>;
        }
      } else {
        cityMessage =
        <div className="city-message">
          <span>
            <strong>You have no home city yet!</strong>
          </span>
          <button onClick={this.handleClick(cityId)} className="city-page-button">
            Set {thisCityName} as my home city
          </button>
        </div>;
      }
    } else {
      cityMessage =
      <div className="city-message">
        <span><strong>You can set your home city once you sign up!</strong></span>
        <Link to="/signup" className="city-page-button">SIGN UP</Link>
        <Link to="/login" className="city-show-link">Log in if you've signed up before</Link>
      </div>;
    }

    return (
      <div className="city-show-container">
        <div className="city-show-banner">
          <img className="city-show-photo" src={extractCity(cityId).url} />
          <span>{thisCityName}</span>
        </div>
        <div className="city-show-below-photo">
          {cityMessage}

          <div className="city-show-host-message">
            <h2 className="city-show-host-header">The host community is great!</h2>
            <p>
              Hosts are driven by the knowledge that we all have way more in common
              than we might think. Their goal is to foster an environment in which
              strangers can connect with one another over what they have in common,
              and learn about the things they might not otherwise have a great
              deal of experience with.
            </p>
          </div>
        </div>

        <MeetupIndexContainer city={cityId} className="city-show-meetups-index"/>
      </div>
    );
  }
}

export default CityShow;
