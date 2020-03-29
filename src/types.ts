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
  label: string;
  width: number;
  height: number;
  source: string;
  url: string;
  media: string;
};

export type ImageStoreState = {
  recentImages: Array<RecentImage>;
  images: Array<ImageDetails>;
};

export type State = {
  imageData: ImageStoreState;
};
