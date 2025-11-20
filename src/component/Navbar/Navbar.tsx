import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="head_nav_wrap">
      <div className="container ">
        <div className="navbar_brand">
          <Link to="/">
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
        <nav className="head_navbar">
          <ul className="navbar_links">
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/compare">Compare</Link>
            </li>
            <li>
              <Link to="/competitors">Competitors</Link>
            </li>
            <li>
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
          <a href="/" className="logout_btn">
            <i className="ico ico-logo-out"></i>
            <span>Disconnect</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
