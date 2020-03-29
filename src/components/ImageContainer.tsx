import React from "react";

type ImageContainerProps = {
  url: string;
};

class ImageContainer extends React.Component<ImageContainerProps> {
  render() {
    const url = this.props;
    return <h1> Hey, {this.props}</h1>;
  }
}

export default ImageContainer;
