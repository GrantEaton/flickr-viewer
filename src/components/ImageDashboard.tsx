import React from "react";
import { selectImages } from "../reducers/image-reducers";
import { State } from "../types";
import { bindActionCreators } from "redux";
import { fetchRecentImagesAction } from "../actions/image-actions";
import { connect } from "react-redux";

type ImageDashboardProps = {
  fetchRecentImages: typeof fetchRecentImagesAction;
};

const mapStateToProps = (state: State) => {
  image: selectImages(state);
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchRecentImages: bindActionCreators(fetchRecentImagesAction, dispatch)
});

class ImageDashboard extends React.Component<ImageDashboardProps> {
  componentWillMount() {
    this.props.fetchRecentImages();
    console.log(this.props);
  }

  render() {
    return <h1> Hey, {}</h1>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDashboard);
