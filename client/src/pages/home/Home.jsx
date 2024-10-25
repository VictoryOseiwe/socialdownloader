import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/head/Header";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import KeyFeaturesWriteup from "../../components/keyfeatureswriteup/KeyFeaturesWriteup";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

export default function Home() {
  AOS.init({
    duration: 500,
  });

  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Social Media Video Downloader",
        "Download Youtube,",
        "Facebook,",
        "Instagram,",
        "And Tiktok Videos",
      ],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="home-container body-container">
        <Header />
        <h2
          data-aos="zoom-in"
          data-aos-delay="900"
          className="socialmedianame homeh2element"
        >
          <span ref={element} />
        </h2>
        <KeyFeaturesWriteup />

        <Footer />
      </div>
    </>
  );
}
