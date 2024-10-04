import { HeaderContainer } from "./Style";
import LogoImg from "./assets/logo.svg";
import HomeImg from "./assets/icon-nav-home.svg";
import MoviesImg from "./assets/icon-nav-movies.svg";
import TvSeries from "./assets/icon-nav-tv-series.svg";
import Bookmark from "./assets/icon-nav-bookmark.svg";
import AvatarImg from "./assets/image-avatar.png";
import { Link } from "react-router-dom";

export default function Header() {
  const routes = [
    { path: "/home", img: HomeImg },
    { path: "/movies", img: MoviesImg },
    { path: "/tv-series", img: TvSeries },
    { path: "/bookmarks", img: Bookmark },
  ];

  return (
    <HeaderContainer>
      <div className="left">
        <img src={LogoImg} alt="logo_img" />
      </div>
      <div className="center">
        {routes.map(({ path, img }) => (
          <li className="links" key={path}>
            <Link to={path}>
              <img src={img} alt="" />
            </Link>
          </li>
        ))}
      </div>
      <div className="right">
        <img src={AvatarImg} alt="avatar_img" />
      </div>
    </HeaderContainer>
  );
}
