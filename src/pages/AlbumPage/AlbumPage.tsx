import { Link, useParams } from "react-router-dom";
import artists from "../../data/db";

export default function AlbumPage() {
  const param = useParams();

  const currentAlbum = artists
    ?.find((el) => el.id === (param.artistId && +param.artistId))
    ?.albums.find((el) => el.albumId === param.albumId);

  function albumImgUrl(name: string) {
    return new URL(`../../assets/images/albums/${name}.jpg`, import.meta.url)
      .href;
  }

  return (
    <div className="album-wrapper">
      <Link className="back-btn" to=".." relative="path">
        &larr; Back
      </Link>
      <img
        className="album-img"
        src={currentAlbum && albumImgUrl(currentAlbum?.cover)}
        alt={currentAlbum?.title}
      />
      <div className="album-description">
        <h3>Title: {currentAlbum?.title}</h3>
        <p>Year: {currentAlbum?.year}</p>
        <p>
          Price:{" "}
          {currentAlbum?.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </div>
    </div>
  );
}
