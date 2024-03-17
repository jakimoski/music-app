import { useParams } from "react-router-dom";
import { artists } from "../../data/db";
import AlbumsList from "../../components/AlbumsListComponent/AlbumsList";

export default function ArtistPage() {
  const params = useParams();

  const currentArtist = artists.find(
    (el) => el.id === (params.artistId && +params.artistId)
  );

  function getImgUrl(name: string) {
    return new URL(`../../assets/images/covers/${name}.jpg`, import.meta.url)
      .href;
  }

  function albumImgUrl(name: string) {
    return new URL(`../../assets/images/albums/${name}.jpg`, import.meta.url)
      .href;
  }

  return (
    <section className="artist-page">
      <img
        className="artist-page__img"
        src={currentArtist && getImgUrl(currentArtist?.cover)}
        alt=""
      />
      <h1 className="artist-page__title">
        {currentArtist && currentArtist.name}
      </h1>
      <p>{currentArtist?.bio}</p>
      <div className="artist-albums-wrapper">
        {currentArtist?.albums.map((el) => (
          <AlbumsList
            key={el.title}
            title={el.title}
            albumId={el.albumId}
            cover={el.cover}
            albumImgUrl={albumImgUrl}
          />
        ))}
      </div>
    </section>
  );
}
