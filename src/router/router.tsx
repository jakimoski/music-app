import { createBrowserRouter } from "react-router-dom";
import AlbumPage from "../pages/AlbumPage/AlbumPage";
import ArtistPage from "../pages/ArtistPage/ArtistPage";
import ArtistsList from "../pages/ArtistsList/ArtistsList";
import RootLayout from "../pages/RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/music-app",
    element: <RootLayout />,
    children: [
      { index: true, element: <ArtistsList /> },
      { path: "artist/:artistId", element: <ArtistPage /> },
      { path: "artist/:artistId/:albumId", element: <AlbumPage /> },
    ],
  },
]);
