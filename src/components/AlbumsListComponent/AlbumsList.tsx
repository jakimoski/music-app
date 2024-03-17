import { Link } from "react-router-dom";
import { TAlbumList } from "../../types/types";

export default function AlbumsList({
  title,
  albumId,
  cover,
  albumImgUrl,
}: TAlbumList) {
  return (
    <Link className="artist-albums-item" key={title} to={albumId}>
      <img className="artist-albums-img" src={albumImgUrl(cover)} alt={title} />
    </Link>
  );
}
