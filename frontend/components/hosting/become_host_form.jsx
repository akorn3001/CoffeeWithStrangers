import React from 'react';
import { merge } from 'lodash';

class BecomeHostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "", background: "", topics: "", tagline: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    const bio = merge({}, this.state);
    this.props.setBio(bio)
    .then(() => {
      this.setState({ description: "", background: "", topics: "", tagline: "" });
    })
    .then(() => this.props.becomeHost());
  }

  handleChange(attribute) {
    return (event) => {
      event.preventDefault();
      this.setState({[attribute]: event.currentTarget.value});
    };
  }

  handleUpload(event) {

    event.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      (error, images) => {

      if (error === null) {
        this.props.setImgURL(images[0].url);
        this.props.setThumbnailURL(images[0].thumbnail_url);
      }
    });
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
        <div className="become-host-form-div">

          <h2>Hey {this.props.currentUser.username} - fill out your host details!</h2>

          <button className="upload-photo-button" onClick={this.handleUpload}>
            UPLOAD PROFILE PICTURE
          </button>

          <form className="become-host-form" onSubmit={this.handleSubmit}>

            <span>Tell us a little about yourself</span>
            <textarea
              className="become-host-form-input-field"
              onChange={this.handleChange('description')}
              type="text"
              value={this.state.description}
              >
            </textarea>


            <br/>

            <span>What's your story? Where ya from?</span>
            <textarea
              className="become-host-form-input-field"
              onChange={this.handleChange('background')}
              type="text"
              value={this.state.background}
              >
            </textarea>

            <br/>

            <span>What are some topics you'd like to talk to people about?</span>
            <textarea
              className="become-host-form-input-field"
              onChange={this.handleChange('topics')}
              type="text"
              value={this.state.topics}
              >
            </textarea>

            <br/>

            <span>Sum yourself up in one sentence</span>
            <textarea
              className="become-host-form-input-field tagline"
              onChange={this.handleChange('tagline')}
              type="text"
              value={this.state.tagline}
              >
            </textarea>

            <br/>

            <button className="hosting-become-host-button" type="submit">SUBMIT TO BECOME A HOST</button>

          </form>

        </div>
      </div>
    );
  }
}

export default BecomeHostForm;
