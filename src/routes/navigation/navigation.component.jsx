import { Link, Outlet } from "react-router-dom";
import CrownLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownLogo} className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link">Shop</Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
