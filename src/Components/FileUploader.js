import React from "react";
import ImageUploader from "react-images-upload";

class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  render() {
    return (
      <ImageUploader
        withIcon={true}
        buttonText="Upload Your Certificate"
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
     
      />
    );
  }
}

export default FileUploader;
