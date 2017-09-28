import React from 'react';
import { merge } from 'lodash';

class EditMeetupForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.meetup) {
      this.state = {
        address: this.props.meetup.address,
        date: ""
      };
    } else {
      this.state = {
        address: "",
        date: ""
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    const meetup = merge({}, this.state, {host_id: this.props.currentUser.id, id: this.props.meetup.id, city_id: this.props.currentUser.city_id});
    this.props.updateSingleMeetup(meetup)
    .then(() => {
      this.props.history.push('/profile');
    });
  }

  handleChange(attribute) {
    return (event) => {
      event.preventDefault();
      this.setState({[attribute]: event.currentTarget.value});

      if (this.props.errors.length) {
        this.props.clearErrors();
      }
    };
  }

  render() {

    let errorBanner;
    let individualErrors;

    if (this.props.errors.length) {
      individualErrors = this.props.errors.map((error, idx) => <li key={idx}>{error}</li>);
      errorBanner = <div className="error-banner"><ul>{individualErrors}</ul></div>;
    } else {
      errorBanner = null;
    }

    return (
      <div>
        {errorBanner}
        <div className="create-meetup-form-div">
          <form className="create-meetup-form" onSubmit={this.handleSubmit}>
            <h2>Hey {this.props.currentUser.username} - let's edit this meetup!</h2>

            <span>Pick an address:</span>
            <input
              className="create-meetup-form-input-field"
              onChange={this.handleChange('address')}
              type="text"
              value={this.state.address}
            />

            <br/>

            <span>Choose a date and time:</span>
            <input
              className="create-meetup-form-input-field"
              onChange={this.handleChange('date')}
              type="datetime-local"
              value={this.state.date}
            />

            <br/>

            <button className="hosting-meetup-button" type="submit">EDIT MEETUP</button>

          </form>
        </div>
      </div>
    );
  }
}

export default EditMeetupForm;
