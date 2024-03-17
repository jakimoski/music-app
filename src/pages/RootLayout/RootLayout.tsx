import Navbar from "../../components/NavbarComponent/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
