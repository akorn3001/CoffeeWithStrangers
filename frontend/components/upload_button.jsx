import React from 'react';

class UploadButton extends React.Component {
  handleUpload() {
    return (event) => {
      event.preventDefault();
      cloudinary.openUploadWidget(
        window.cloudinary_options,
        function(error, images) {
        if (error === null) {
          this.props.setImgURL(images[0].url);
        }
      });
    };
  }
  render() {
    return (
      <button onClick={this.handleUpload}>
        UPLOAD IMAGE
      </button>
    );
  }
}
