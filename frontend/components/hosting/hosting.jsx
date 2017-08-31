import React from 'react';
import BecomeHostFormContainer from './become_host_form_container';
import CreateMeetupFormContainer from './create_meetup_form_container';
import { Link } from 'react-router-dom';

class Hosting extends React.Component {
  constructor(props) {
    super(props);

    // this.handleHostForm = this.handleHostForm.bind(this);
    this.handleSetCity = this.handleSetCity.bind(this);
    this.handleGotoHostForm = this.handleGotoHostForm.bind(this);
    this.handleSubmitHostForm = this.handleSubmitHostForm.bind(this);
  }

  handleSetCity() {
    return(event) => {
      event.preventDefault();
      this.props.history.push('/cities');
    };
  }

  handleGotoHostForm() {
    return(event) => {
      event.preventDefault();
      this.props.becomePendingHost();
    };
  }

  handleSubmitHostForm() {
    return(event) => {
      event.preventDefault();
      this.props.becomeHost();
    };
  }

  render () {
    let hostingContent;
    let becomeHostButton;

    if (this.props.currentUser) {
      if (this.props.currentUser.city_id) {
        becomeHostButton =
        <button onClick={this.handleGotoHostForm()} className="hosting-become-host-button">
          BECOME A HOST
        </button>;
      } else {
        becomeHostButton =
        <button onClick={this.handleSetCity()} className="hosting-set-city-button">
          FIRST SET YOUR CITY
        </button>;
      }
    } else {
      becomeHostButton =
      <div className="hosting-sign-in-link">
        <Link to="/login">Login to become a host</Link>
      </div>;
    }

    let hostingSchpiel =
    <div className="hosting-schpiel">
      <h2>You like coffee. Other people like coffee. You know that strangers
        can become friends by talking about their mutual love of coffee.
      </h2>

      <p>
        Think you're up to the task of becoming a host and bringing people together over coffee?
      </p>

      <ol>
        <li>What would I be doing?</li>
        <li>What are the perks? (HAHA get it?)</li>
        <li>Do Ihave the right stuff?</li>
        <li>How can I become a host?</li>
      </ol>

      <p>
        We asked some other hosts and here's their two cents about hosting.
      </p>

      <h3>
        CWS hosts bring people together - facilitating an experience that helps
        coalesce the vapors of human experience into a viable and meaningful
        comprehension.
      </h3>

      <p>
        Everybody's different and that is what makes us the same. Hosts draw
        from their own unique backgrounds to connect and relate with others over
        a good cup of coffee. Really connecting with others is a lost art and
        a CWS host understands that. At the end of the day we're trying to make
        our big big world just a little bit smaller.
      </p>

      <h3>
        Our team of hosts is getting bigger all the time.
      </h3>

      <p>
        Being a CWS host can add a sense of purpose to your life. It can make
        the ho-hum everyday seem a little more special by knowing you're making
        a difference by bringing people together who wouldn't otherwise ever
        meet! Being a host strengthens your listening skills, and makes you a
        more empathic person.
      </p>

      <p>
        Being a CWS host means being part of a global family. Hosting a meetup
        in Seattle or London or Gravity Falls makes you realize how similar we
        all really are. Imagine sitting down with people and already knowing you
        have something in common - the desire to connect and make our world a
        more understanding and kinder place. That is what a host does.
      </p>

      <h3>
        You know who you are and what you stand for.
      </h3>

      <p>
        If you like coffee, people, and those people's stories then you have
        what it takes to become a CWS host! What are you waiting for? Click
        the big button below!
      </p>

      <h3>
        Join us!
      </h3>

      {becomeHostButton}
    </div>;

    if (this.props.currentUser) {
      if (this.props.currentUser.host_status === "false") {
        hostingContent = hostingSchpiel;
      } else {
        hostingContent =
        <div className="hosting-below-banner">
          <CreateMeetupFormContainer />
        </div>;
      }
    } else {
      hostingContent = hostingSchpiel;
    }

    return (
      <div>
        <div className="hosting-banner">
          <img src={window.staticImages.hostingBanner}/>
          <span>Hosting</span>
        </div>

        {hostingContent}
      </div>
    );
  }
}

export default Hosting;
