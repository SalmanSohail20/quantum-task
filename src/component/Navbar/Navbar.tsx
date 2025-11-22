import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="head_nav_wrap">
      <div className="container ">
        <div className="navbar_brand">
          <Link to="/">
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
        <button className="burger_btn"><i className="ico ico-burger-list-menu-navigation-svgrepo-com"></i></button>
        <nav className="head_navbar">
          <ul className="navbar_links">
            <li className={location.pathname === "/analytics" ? "active" : ""}>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li className={location.pathname === "/compare" ? "active" : ""}>
              <Link to="/compare">Compare</Link>
            </li>
            <li
              className={location.pathname === "/competitors" ? "active" : ""}
            >
              <Link to="/competitors">Competitors</Link>
            </li>
            <li className={location.pathname === "/settings" ? "active" : ""}>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar_end">
          <div className="user_account">
            <div className="user_info">
              <strong className="user_name">John Seller</strong>
              <span className="user_email">Premium Plan</span>
            </div>
            <div className="user_avatar">
              <img src="/images/user-avatar.svg" alt="" />
            </div>
          </div>
          <Link to="/" className="logout_btn">
            <i className="ico ico-log-out"></i>
            <span>Disconnect</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
