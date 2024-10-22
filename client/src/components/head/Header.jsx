import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import {
  Cancel,
  Facebook,
  Instagram,
  Install,
  Menu,
  Moon,
  Question,
  Sun,
  Tiktok,
  Youtube,
} from "../ReactIcons";

export default function Header() {
  const [sidebar, setSideBar] = useState(false);

  function showSideBar() {
    setSideBar(!sidebar);
  }
  return (
    <>
      <div className="nav-container">
        <Link className="gradient-text" to="/">
          <span className="logo">socialdown</span>
        </Link>
        <div className="nav-link">
          <NavLink className="link" to="/youtube">
            {/* <Icon icon={yt} /> */}
            <span>Youtube</span>
          </NavLink>
          <NavLink className="link" to="/facebook">
            <span>Facebook</span>
          </NavLink>
          <NavLink className="link" to="/instagram">
            <span>Instagram</span>
          </NavLink>
          <NavLink className="link" to="/tiktok">
            <span>Tiktok</span>
          </NavLink>
          <NavLink className="link" to="/howto">
            <span>How to</span>
          </NavLink>
          <NavLink className="link" to="/install">
            <span>Install</span>
          </NavLink>
          <Moon size={20} />
        </div>
        <div className="naviconcontainer">
          <div className="iconwrapper">
            <Moon size={20} />
          </div>
          <div className="iconwrapper">
            <Menu size={20} onClick={showSideBar} className="menu" />
          </div>
        </div>
      </div>
      <div className={`sidebar ${sidebar ? "show" : ""}`}>
        <div className="close iconwrapper">
          <Cancel size={20} onClick={showSideBar} />
        </div>
        <div className="navigation">
          <NavLink className="linkmobile" to="/youtube">
            <Youtube />
            <span>Youtube</span>
          </NavLink>
          <NavLink className="linkmobile" to="/facebook">
            <Facebook />
            <span>Facebook</span>
          </NavLink>
          <NavLink className="linkmobile" to="/instagram">
            <Instagram />
            <span>Instagram</span>
          </NavLink>
          <NavLink className="linkmobile" to="/tiktok">
            <Tiktok />
            <span>Tiktok</span>
          </NavLink>
          <NavLink className="linkmobile" to="/howto">
            <Question />
            <span>How to</span>
          </NavLink>
          <NavLink className="linkmobile" to="/install">
            <Install />
            <span>Install</span>
          </NavLink>
        </div>
      </div>
      {sidebar && <div className="overlay" onClick={showSideBar}></div>}
    </>
  );
}
