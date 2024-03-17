export type TArtistItem = {
  id: number;
  cover: string;
  name: string;
};

export type TAlbumList = {
  title: string;
  albumId: string;
  cover: string;
  albumImgUrl(name: string): string;
};
