import { NavLink } from "react-router-dom";
import image from "../../assets/images/raw/Girls-Listen-Music_0.jpg";

export default function Navbar() {
  return (
    <header className="header">
      <NavLink to={"/music-app"}>
        <img src={image} />
      </NavLink>
    </header>
  );
}
