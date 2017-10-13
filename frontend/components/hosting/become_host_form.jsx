import React from 'react';
import { merge } from 'lodash';

class BecomeHostForm extends React.Component {
  constructor(props) {
    super(props);

    let imageURL = (props.currentUser.image_url ? props.currentUser.image_url : "");
    let description = (props.currentUser.description ? props.currentUser.description : "");
    let background = (props.currentUser.background ? props.currentUser.background : "");
    let topics = (props.currentUser.topics ? props.currentUser.topics : "");
    let tagline = (props.currentUser.tagline ? props.currentUser.tagline : "");

    this.state = { description, background, topics, tagline, imageURL, imageFile: null };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillMount(){
    this.props.clearErrors();
  }

  handleChange(attribute) {
    return (event) => {
      event.preventDefault();
      this.setState({[attribute]: event.currentTarget.value});
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData();

    formData.append("user[description]", this.state.description);
    formData.append("user[background]", this.state.background);
    formData.append("user[topics]", this.state.topics);
    formData.append("user[tagline]", this.state.tagline);

    if (this.state.imageFile) {
      formData.append("user[image]", this.state.imageFile);
    }


    this.props.addHostParams(this.props.currentUser, formData, this.props.becomeHost);
  }

  updateFile(event) {
    const reader = new FileReader();
    const file = event.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageURL: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageURL: "", imageFile: null });
    }
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

          <form className="become-host-form" onSubmit={this.handleSubmit}>

            <input type="file" onChange={this.updateFile} />
            <img className="preview" src={this.state.imageURL} />

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

            <button className="hosting-become-host-button" type="submit">SUBMIT</button>

          </form>

        </div>
      </div>
    );
  }
}

export default BecomeHostForm;
