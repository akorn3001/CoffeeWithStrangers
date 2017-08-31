import React from 'react';

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

    if (this.props.thisPageUser) {
      if (this.props.thisPageUser.host_status === "true") {
        hostBioInfo =
        <div className="user-show-container">
          <div className="host-bio">
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

          <div className="host-tagline">
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
