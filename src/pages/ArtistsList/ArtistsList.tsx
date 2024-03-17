import ArtistItem from "../../components/ArtistItemComponent/ArtistItem";
import { artists } from "../../data/db";

export default function ArtistsList() {
  return (
    <section className="artist-wrapper">
      <h1 className="artist-wrapper__title">Browse the artists</h1>
      {artists.map((artist) => (
        <ArtistItem
          key={artist.id}
          cover={artist.cover}
          name={artist.name}
          id={artist.id}
        />
      ))}
    </section>
  );
}
