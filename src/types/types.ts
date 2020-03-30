export type RecentImage = {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: string;
  title: string;
  ispublic: string;
  isfriend: string;
  isfamily: string;
};

export type ImageDetails = {
  id: string;
  label: string;
  width: number;
  height: number;
  source: string;
  url: string;
  media: string;
};

export type ImageStoreState = {
  recentImages: Array<RecentImage>;
  imageDetails: Array<Array<ImageDetails>>;
};

export type State = {
  imageData: ImageStoreState;
};

export type GalleryImage = {
  src: string;
  thumbnail?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  isSelected?: boolean;
  caption?: string;
};

export type RecentImagesResponse = { photos: { photo: Array<RecentImage> } };
export type ImageSizesResponse = { sizes: { size: Array<ImageDetails> } };
