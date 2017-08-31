import React from 'react';
import { merge } from 'lodash';

class CreateMeetupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "", date: "", time: "", host_id: this.props.currentUser.id, city_id: this.props.currentUser.city_id };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const meetup = merge({}, this.state);
    this.props.createMeetup(meetup)
    .then(() => {
      this.setState({ address: "", date: "", time: "", host_id: this.props.currentUser.id, city_id: this.props.currentUser.city_id });
    })
    .then(() => {
      this.props.history.push('/profile');
    });
  }

  handleChange(attribute) {
    return (event) => {
      event.preventDefault();
      this.setState({[attribute]: event.currentTarget.value});
    };
  }

  render() {

    return (
      <div>

        <div className="create-meetup-form-div">
          <form className="create-meetup-form" onSubmit={this.handleSubmit}>
            <h2>Hey {this.props.currentUser.username} - let's create a meetup!</h2>

            <span>Pick an address:</span>
            <input
              className="create-meetup-form-input-field"
              onChange={this.handleChange('address')}
              type="text"
              value={this.state.address}
            />

            <br/>

            <span>Choose a date:</span>
            <input
              className="create-meetup-form-input-field"
              onChange={this.handleChange('date')}
              type="datetime-local"
              value={this.state.date}
            />

            <br/>

            <span>Choose a time:</span>
            <input
              className="create-meetup-form-input-field"
              onChange={this.handleChange('date')}
              type="time"
              value={this.state.date}
            />

            <button className="hosting-create-meetup-button" type="submit">CREATE MEETUP</button>

          </form>
        </div>
      </div>
    );
  }
}

export default CreateMeetupForm;
