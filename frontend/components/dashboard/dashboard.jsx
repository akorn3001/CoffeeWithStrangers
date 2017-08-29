import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
  const handleClick = () => {
    return(event) => {
      event.preventDefault();
      props.unattendMeetup();
    };
  };

  let dashboardEl;

  let aboutMessage =
  <div className="dashboard-welcome">
    <h2>Welcome home, {props.currentUser.username}!</h2>
    <h3>What are you happy about today?</h3>

    <Link className="dashboard-welcome-join-meetup" to={`/cities/${props.currentUser.city_id}`}>
      Sign up for a meetup!
    </Link>
  </div>;




  if (props.currentUser.attended_meetup_ids.length) {
    dashboardEl =
    <div className="dashboard-container">
      {aboutMessage}
    </div>;
  } else {
    dashboardEl =
    <div className="dashboard-container">
      {aboutMessage}

      <div className="dashboard-el">
        <h2> You have no meetups coming up! Let's change that.</h2>
        <Link className="dashboard-no-meetups" to={`/cities/${props.currentUser.city_id}`}>
          <h1>+</h1>
          <h3>JOIN A TEA TIME</h3>
        </Link>
      </div>
    </div>;
  }
  return (
    <div>
      {dashboardEl}
    </div>
  );



};

export default Dashboard;
