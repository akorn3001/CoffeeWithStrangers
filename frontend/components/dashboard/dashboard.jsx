import React from 'react';
import { Link } from 'react-router-dom';
import MeetupIndexItemContainer from '../meetups/meetup_index_item_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllUserMeetups(this.props.currentUser.id);
  }

  render() {
    let dashboardEl;

    let aboutMessage =
    <div className="dashboard-welcome">
      <h2>Welcome home, {this.props.currentUser.username}!</h2>
      <h3>What are you happy about today?</h3>

      <Link className="dashboard-welcome-join-meetup" to={'/cities'}>
        Sign up for a meetup!
      </Link>
    </div>;

    if (this.props.currentUser.city_id) {
      if (this.props.attended_meetups.length) {

        dashboardEl =
        <div className="dashboard-container">
          {aboutMessage}
          <div>
            <div className="dashboard-joined-meetups">
              <h1>Meetups you're attending</h1>
              <div className="dashboard-meetups attended">
                {this.props.attended_meetups.map(meetup => <div className="dashboard-meetup-item" key={meetup.id}>
                  <MeetupIndexItemContainer meetup={meetup}/>
                </div>)}
              </div>
            </div>

            <div className="dashboard-hosted-meetups">
              <h1>Meetups you're hosting</h1>
              <div className="dashboard-meetups attended">
                {this.props.hosted_meetups.map(meetup => <div className="dashboard-meetup-item" key={meetup.id}>
                  <MeetupIndexItemContainer meetup={meetup}/>
                </div>)}
              </div>
            </div>
          </div>

        </div>;
      } else {
        dashboardEl =
        <div className="dashboard-container">
          {aboutMessage}

          <div className="dashboard-el">
            <h2> You have no meetups coming up! Let's change that.</h2>
            <Link className="dashboard-no-meetups" to={`/cities/${this.props.currentUser.city_id}`}>
              <h1>+</h1>
              <h3>JOIN A TEA TIME</h3>
            </Link>
          </div>
        </div>;
      }
    } else {
      dashboardEl =
      <div className="dashboard-container">
        {aboutMessage}

        <div className="dashboard-el">
          <h2>Set your home city to join a meetup!</h2>
          <Link className="dashboard-no-meetups" to={'/cities'}>
            <h1>+</h1>
            <h3>SET YOUR HOME CITY</h3>
          </Link>
        </div>
      </div>;
    }

    //
    // <div className="dashboard-joined-meetups">
    //   {meetups.map(meetup => <DashboardMeetupIndexItemContainer key={meetup.id} meetup={meetup} />)}
    // </div>
    // this.props.currentUser.meetups.map(meetup => )
    return (
      <div>
        {dashboardEl}

      </div>
    );
  }
}

export default Dashboard;
