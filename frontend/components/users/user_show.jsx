import React from 'react';
import DUMMY_CITIES from '../dummy_cities';

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }


  render() {
    let hostBioInfo;
    let profilePic;

    if (this.props.thisPageUser) {
      if (this.props.thisPageUser.host_status === "true") {

        if (this.props.thisPageUser.img_url) {
          profilePic = <img src={this.props.thisPageUser.img_url} />;
        } else {
          profilePic = <img src={window.staticImages.defaultPic} />;
        }

        let city = DUMMY_CITIES.find((city) => city.id === this.props.thisPageUser.city_id);
        let cityName = city.name;
        let cityURL = city.url;

        hostBioInfo =
        <div>
          <div className="user-show-banner">
            <img src={cityURL}/>
            <span>Hi, I'm {this.props.thisPageUser.username}!</span>
          </div>

          <div className="user-show-container">
            <div className="user-show-profile-picture">
              {profilePic}
            </div>

            <div className="user-show-host-bio">
              <p>
                {this.props.thisPageUser.description}
              </p>

              <h3>
                What's your deal?
              </h3>

              <p>
                {this.props.thisPageUser.background}
              </p>

              <h3>
                What should we chat about?
              </h3>

              <p>
                {this.props.thisPageUser.topics}
              </p>
            </div>
          </div>

          <div className="user-show-host-tagline">
            <span>
              {this.props.thisPageUser.tagline}
            </span>
          </div>


        </div>;
      } else {
        hostBioInfo = null;
      }
    } else {
      hostBioInfo = null;
    }


    return (
      <div>
        {hostBioInfo}
      </div>
    );
  }

}


export default UserShow;
