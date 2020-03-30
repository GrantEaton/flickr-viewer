import React from "react";
import Gallery from "react-grid-gallery";
import {
  selectRecentImageIds,
  selectImages,
  selectImageDetails
} from "../reducers/image-reducers";
import { State, ImageDetails, GalleryImage } from "../types/types";
import { bindActionCreators } from "redux";
import {
  fetchRecentImagesAction,
  fetchImageSizesAction
} from "../actions/image-actions";
import { connect } from "react-redux";

type ImageDashboardProps = {
  fetchRecentImages: typeof fetchRecentImagesAction;
  fetchImageSizes: (imageId: string) => any;
  imageDetails: Array<Array<ImageDetails>>;
  recentImageIds: string[];
  images: State;
};

const mapStateToProps = (state: State) => ({
  recentImageIds: selectRecentImageIds(state),
  images: selectImages(state),
  imageDetails: selectImageDetails(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchRecentImages: bindActionCreators(fetchRecentImagesAction, dispatch),
  fetchImageSizes: (imageId: string) =>
    dispatch(fetchImageSizesAction({ imageId }))
});

class ImageDashboard extends React.Component<ImageDashboardProps> {
  componentWillMount() {
    this.props.fetchRecentImages();
  }

  componentWillReceiveProps(nextProps: ImageDashboardProps) {
    const { recentImageIds, fetchImageSizes } = nextProps;
    const haveIdsChanged =
      recentImageIds.length !== this.props.recentImageIds.length ||
      recentImageIds.find((id, i) => this.props.recentImageIds[i] !== id);
    if (recentImageIds && haveIdsChanged) {
      Promise.all(recentImageIds.map(id => fetchImageSizes(id)));
    }
  }

  render() {
    const { imageDetails } = this.props;
    const galleryImages =
      imageDetails &&
      imageDetails.reduce(
        (acc: Array<GalleryImage>, imageDetail: Array<ImageDetails>) => {
          const image = imageDetail[1];
          return [
            ...acc,
            {
              src: image.source,
              thumbnail: image.source,
              thumbnailHeight: image.height,
              thumbnailWidth: image.width,
              caption: image.label
            }
          ];
        },
        []
      );
    return (
      <React.Fragment>
        {galleryImages && <Gallery images={galleryImages} />}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDashboard);
