import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import {
  Cancel,
  Facebook,
  Home,
  Instagram,
  Install,
  Menu,
  Moon,
  Question,
  Sun,
  Tiktok,
  Youtube,
} from "../ReactIcons";
import AOS from "aos";

export default function Header() {
  AOS.init({
    duration: 500,
  });

  const [sidebar, setSideBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkMode", "true"); // Save preference
    } else {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkMode", "false"); // Save preference
    }
  }

  function showSideBar() {
    setSideBar(!sidebar);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.body.classList.add("darkmode");
    }
  }, []);

  return (
    <>
      <div
        className="nav-container-bg"
        data-aos="fade-down-right"
        data-aos-delay="700"
      >
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
            {darkMode ? (
              <Moon size={20} onClick={toggleDarkMode} />
            ) : (
              <Sun onClick={toggleDarkMode} size={20} />
            )}
          </div>
          <div className="naviconcontainer">
            <div className="iconwrapper">
              {darkMode ? (
                <Moon size={20} onClick={toggleDarkMode} />
              ) : (
                <Sun onClick={toggleDarkMode} size={20} />
              )}
            </div>
            <div onClick={showSideBar} className="iconwrapper">
              <Menu size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className={`sidebar ${sidebar ? "show" : ""}`}>
        <div className="close iconwrapper">
          <Cancel size={20} onClick={showSideBar} />
        </div>
        <div className="navigation">
          <NavLink className="linkmobile" to="/">
            <Home />
            <span>Home</span>
          </NavLink>
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
        <p
          style={{
            fontSize: "var(--xsmall)",
            color: "var(--secondarytextcolor)",
            textAlign: "center",
          }}
        >
          Courtesy @victoryoseiwe
        </p>
      </div>
      {sidebar && (
        <div
          data-aos="fade-down-right"
          data-aos-delay="700"
          className="overlay"
          onClick={showSideBar}
        ></div>
      )}
    </>
  );
}
