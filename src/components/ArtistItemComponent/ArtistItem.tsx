import { Link } from "react-router-dom";
import { TArtistItem } from "../../types/types";

function getImgUrl(name: string) {
  return new URL(`../../assets/images/covers/${name}.jpg`, import.meta.url)
    .href;
}

export default function ArtistItem({ cover, name, id }: TArtistItem) {
  return (
    <Link to={`artist/${id}`} className="artist-item">
      <img className="artist-item__img" src={getImgUrl(cover)} alt={name} />
      <h2 className="artist-item__name">{name}</h2>
    </Link>
  );
}
