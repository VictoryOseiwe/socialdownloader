import React from "react";
import { Link } from "react-router-dom";
import moon from "../../assets/moon.svg";
import { IoMdMenu } from "react-icons/io";
import Icon from "../icon/Icon";
import "./Header.css";
import Facebook from "../../pages/facebook/Facebook";

export default function Header() {
  return (
    <>
      <div className="nav-container">
        <div className="gradient-text">
          <span className="logo">socialdown</span>
        </div>
        <div className="nav-link">
          <Link to="/youtube">
            {/* <Icon icon={yt} /> */}
            <span>Youtube</span>
          </Link>
          <Link to="/facebook">
            <span>Facebook</span>
          </Link>
          <Link to="/instagram">
            <span>Instagram</span>
          </Link>
          <Link to="/tiktok">
            <span>Tiktok</span>
          </Link>
          <Link to="/howto">
            <span>How to</span>
          </Link>
          <Link to="/install">
            <span>Install</span>
          </Link>
          <Icon icon={moon} />
          <IoMdMenu className="icon menu" />
        </div>
      </div>
    </>
  );
}
