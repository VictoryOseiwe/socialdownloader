import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Facebook from "./pages/facebook/Facebook";
import Instagram from "./pages/instagram/Instagram";
import Tiktok from "./pages/tiktok/Tiktok";
import Howto from "./pages/howto/Howto";
import Install from "./pages/install/Install";
import Youtube from "./pages/youtube/Youtube";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<h1>About Page</h1>} />
      <Route exact path="/contact" element={<h1>Contact Page</h1>} />
      <Route exact path="/youtube" element={<Youtube />} />
      <Route exact path="/facebook" element={<Facebook />} />
      <Route exact path="/instagram" element={<Instagram />} />
      <Route exact path="/tiktok" element={<Tiktok />} />
      <Route exact path="/howto" element={<Howto />} />
      <Route exact path="/install" element={<Install />} />
      <Route exact path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
